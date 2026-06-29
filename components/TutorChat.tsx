'use client';

import { useState, useRef, useEffect } from 'react';
import { Subject, GeminiModel, TutorMessage, TutorPreference } from '@/lib/types';
import {
  Send,
  Loader2,
  RefreshCw,
  Lightbulb,
  BookOpen,
  Save,
  Upload,
  MessageCircle,
  Sparkles,
  ThumbsUp,
  AlertCircle,
  Download,
  FileUp
} from 'lucide-react';

interface TutorChatProps {
  grade: number;
  subject: Subject;
  apiKey: string;
  model?: GeminiModel;
  preference: TutorPreference | null;
  onSavePreference: (preference: TutorPreference) => void;
  // Context from LearningTab
  initialTopic?: string;
  initialContext?: string[]; // yêu cầu cần đạt
}

export default function TutorChat({
  grade,
  subject,
  apiKey,
  model,
  preference,
  onSavePreference,
  initialTopic,
  initialContext
}: TutorChatProps) {
  const [problem, setProblem] = useState('');
  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentProblem, setCurrentProblem] = useState<string>('');
  const [showPreferencePopup, setShowPreferencePopup] = useState(false);
  const [isAlternativeMode, setIsAlternativeMode] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [customStyleInput, setCustomStyleInput] = useState('');
  const [showMismatchWarning, setShowMismatchWarning] = useState(false);
  const [suggestedSubject, setSuggestedSubject] = useState<string>('');
  const [pendingProblem, setPendingProblem] = useState<string>('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Predefined learning styles
  const LEARNING_STYLES = [
    { id: 'auto', label: 'Để app tự chọn', description: 'Dựa vào các lời giải bạn đã thích để chọn phong cách phù hợp', isAuto: true },
    { id: 'step_by_step', label: 'Giải thích từng bước chi tiết', description: 'Chia nhỏ bài toán, giải thích từng bước một cách rõ ràng' },
    { id: 'visual', label: 'Dùng hình ảnh và ví dụ minh họa', description: 'Sử dụng sơ đồ, bảng biểu và ví dụ thực tế để minh họa' },
    { id: 'simple', label: 'Ngôn ngữ đơn giản, dễ hiểu', description: 'Tránh thuật ngữ phức tạp, giải thích bằng ngôn ngữ hàng ngày' },
    { id: 'formula', label: 'Tập trung vào công thức và quy tắc', description: 'Nhấn mạnh công thức, định lý và cách áp dụng' },
    { id: 'practice', label: 'Học qua bài tập thực hành', description: 'Đưa ra nhiều bài tập tương tự để luyện tập' },
  ];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mdFileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const STORAGE_KEY = 'tutorChat_session';

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight
      textareaRef.current.style.height = 'auto';
      // Set height to scrollHeight, with min and max constraints
      const newHeight = Math.min(Math.max(textareaRef.current.scrollHeight, 52), 200);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [problem]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Load selected style when preference changes
  useEffect(() => {
    if (preference?.preferredStyle) {
      if (preference.preferredStyle === 'auto') {
        setSelectedStyle('auto');
      } else if (preference.preferredStyle.startsWith('custom:')) {
        setSelectedStyle('custom');
        setCustomStyleInput(preference.preferredStyle.replace('custom:', '').trim());
      } else {
        // Check if it matches a predefined style
        const matchedStyle = LEARNING_STYLES.find(s => s.id !== 'auto' && preference.preferredStyle.includes(s.label));
        if (matchedStyle) {
          setSelectedStyle(matchedStyle.id);
        } else {
          // Legacy - keep as is
          setSelectedStyle('');
        }
      }
    }
  }, [preference]);

  // Load session from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const session = JSON.parse(saved);
        if (session.messages?.length > 0) {
          setMessages(session.messages);
          setCurrentProblem(session.currentProblem || '');
        }
      }
    } catch (e) {
      console.error('Error loading session from localStorage:', e);
    }
  }, []);

  // Save session to localStorage when messages change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          messages,
          currentProblem,
          grade,
          subject,
          savedAt: new Date().toISOString()
        }));
      } catch (e) {
        console.error('Error saving session to localStorage:', e);
      }
    }
  }, [messages, currentProblem, grade, subject]);

  // Pre-populate input area with initial topic if available
  useEffect(() => {
    if (initialTopic) {
      let initialMsg = `Giảng bài giải thích cho em chủ đề ôn tập: ${initialTopic}`;
      if (initialContext && initialContext.length > 0) {
        initialMsg += `\nVới các nội dung yêu cầu cần đạt:\n${initialContext.map(yc => `- ${yc}`).join('\n')}`;
      }
      setProblem(initialMsg);
    } else {
      setProblem('');
    }
  }, [initialTopic, initialContext]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: TutorMessage = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const callTutorAPI = async (prompt: string) => {
    // Build preferred style - if auto, include liked explanations
    let styleForAPI = preference?.preferredStyle || '';
    if (styleForAPI === 'auto' && preference?.likedExplanations?.length) {
      styleForAPI = `Dựa vào các lời giải học sinh đã thích trước đó:\n${preference.likedExplanations.slice(-2).join('\n---\n')}\n\nHãy giải thích theo phong cách tương tự.`;
    }

    const response = await fetch('/api/tutor-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        grade,
        subject,
        preferredStyle: styleForAPI,
        apiKey,
        model
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Lỗi khi gọi API');
    }
    return data.response;
  };

  // Validate if problem matches the selected subject
  const validateProblemSubject = async (problemText: string): Promise<{ isMatch: boolean; detectedSubject: string }> => {
    try {
      const response = await fetch('/api/tutor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Phân tích đề bài sau và cho biết môn học phù hợp nhất.
Đề bài: "${problemText}"

Trả lời CHÍNH XÁC theo định dạng sau (không thêm gì khác):
MON_HOC: [Toán/Ngữ văn/Tiếng Anh]`,
          grade,
          subject,
          preferredStyle: '',
          apiKey,
          model
        })
      });

      const data = await response.json();
      if (!response.ok) {
        return { isMatch: true, detectedSubject: subject }; // Skip validation on error
      }

      const result = data.response || '';
      const match = result.match(/MON_HOC:\s*(Toán|Ngữ văn|Tiếng Anh)/i);
      const detectedSubject = match ? match[1] : subject;

      return {
        isMatch: detectedSubject.toLowerCase() === subject.toLowerCase(),
        detectedSubject
      };
    } catch {
      return { isMatch: true, detectedSubject: subject }; // Skip validation on error
    }
  };

  const handleSendProblem = async () => {
    if (!problem.trim()) {
      setError('Vui lòng nhập đề bài');
      return;
    }
    if (!apiKey) {
      setError('Vui lòng nhập API Key ở trang chính');
      return;
    }

    setLoading(true);
    setError(null);

    // Validate problem matches subject (only for first message or new problem)
    if (messages.length === 0) {
      const validation = await validateProblemSubject(problem);
      if (!validation.isMatch) {
        setLoading(false);
        setSuggestedSubject(validation.detectedSubject);
        setPendingProblem(problem);
        setShowMismatchWarning(true);
        return;
      }
    }

    // Proceed with sending the problem
    await sendProblemToAI(problem);
  };

  const sendProblemToAI = async (problemText: string) => {
    setLoading(true);
    setError(null);
    setCurrentProblem(problemText);

    // Add user message
    addMessage('user', problemText);
    setProblem('');

    try {
      const response = await callTutorAPI(problemText);
      addMessage('assistant', response);
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  const handleProceedAnyway = () => {
    setShowMismatchWarning(false);
    sendProblemToAI(pendingProblem);
    setPendingProblem('');
    setSuggestedSubject('');
  };

  const handleAlternativeSolution = async (styleLabel: string) => {
    if (!currentProblem) {
      setError('Chưa có bài toán nào để giải theo cách khác');
      return;
    }

    setLoading(true);
    setError(null);

    addMessage('user', `Giải bằng cách khác: ${styleLabel}`);

    try {
      const prompt = `Đây là bài toán đã được đề cập trước đó:
${currentProblem}

Yêu cầu của học sinh: Hãy giải thích bài toán này theo phong cách "${styleLabel}".

Hãy giải thích bài toán này theo yêu cầu trên, sử dụng cách tiếp cận khác với lời giải trước.`;

      const response = await callTutorAPI(prompt);
      addMessage('assistant', response);
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  const handleSimilarProblem = async () => {
    if (!currentProblem) {
      setError('Chưa có bài toán nào để tạo đề tương tự');
      return;
    }

    setLoading(true);
    setError(null);
    addMessage('user', 'Tạo một đề bài tương tự');

    try {
      const prompt = `Dựa trên bài toán sau, hãy tạo một đề bài tương tự (chỉ tạo đề, không giải):

${currentProblem}

Yêu cầu:
- Giữ cùng cấp độ khó và cấu trúc
- Thay đổi các số liệu và thông tin cụ thể
- Đảm bảo đề bài mới có thể giải được
- Chỉ trả về đề bài mới, không cần lời giải`;

      const response = await callTutorAPI(prompt);
      addMessage('assistant', response);
      // Set the new problem as current for further actions
      setCurrentProblem(response);
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  const handleNewProblem = () => {
    setMessages([]);
    setCurrentProblem('');
    setProblem('');
    setError(null);
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);
  };

  // Save chat to markdown file
  const handleSaveToMarkdown = () => {
    if (messages.length === 0) {
      setError('Chưa có nội dung để lưu');
      return;
    }

    const date = new Date().toLocaleDateString('vi-VN');
    const time = new Date().toLocaleTimeString('vi-VN');

    let markdown = `# Bài Giải - ${subject} Lớp ${grade}\n`;
    markdown += `📅 Ngày: ${date} ${time}\n\n`;
    markdown += `---\n\n`;

    messages.forEach((msg) => {
      if (msg.role === 'user') {
        markdown += `## 📝 Đề bài / Yêu cầu\n\n${msg.content}\n\n`;
      } else {
        markdown += `## 💡 Lời giải\n\n${msg.content}\n\n`;
      }
      markdown += `---\n\n`;
    });

    // Create and download file
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bai-giai-${subject.toLowerCase().replace(/\s/g, '-')}-lop${grade}-${new Date().getTime()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Load chat from markdown file
  const handleLoadFromMarkdown = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const loadedMessages: TutorMessage[] = [];

      // Use regex to find sections by headers (## 📝 and ## 💡)
      // This handles content that may contain --- inside
      const sectionRegex = /## (📝 Đề bài \/ Yêu cầu|💡 Lời giải)\n\n([\s\S]*?)(?=\n\n---\n\n## |$)/g;
      let match;

      while ((match = sectionRegex.exec(text)) !== null) {
        const header = match[1];
        let content = match[2].trim();

        // Remove trailing --- if present
        content = content.replace(/\n\n---\s*$/, '').trim();

        if (content) {
          const role: 'user' | 'assistant' = header.includes('📝') ? 'user' : 'assistant';
          loadedMessages.push({
            id: Date.now().toString() + Math.random(),
            role,
            content,
            timestamp: new Date().toISOString()
          });
        }
      }

      // Fallback: try simpler parsing if regex didn't work
      if (loadedMessages.length === 0) {
        const lines = text.split('\n');
        let currentRole: 'user' | 'assistant' | null = null;
        let currentContent: string[] = [];

        for (const line of lines) {
          if (line.includes('## 📝 Đề bài') || line.includes('Đề bài / Yêu cầu')) {
            // Save previous content if any
            if (currentRole && currentContent.length > 0) {
              loadedMessages.push({
                id: Date.now().toString() + Math.random(),
                role: currentRole,
                content: currentContent.join('\n').trim(),
                timestamp: new Date().toISOString()
              });
            }
            currentRole = 'user';
            currentContent = [];
          } else if (line.includes('## 💡 Lời giải') || line.includes('Lời giải')) {
            // Save previous content if any
            if (currentRole && currentContent.length > 0) {
              loadedMessages.push({
                id: Date.now().toString() + Math.random(),
                role: currentRole,
                content: currentContent.join('\n').trim(),
                timestamp: new Date().toISOString()
              });
            }
            currentRole = 'assistant';
            currentContent = [];
          } else if (currentRole && !line.startsWith('# ') && !line.startsWith('📅')) {
            // Skip standalone --- separators between sections
            if (line.trim() === '---' && currentContent.length > 0) {
              // Check if next meaningful content is a new section
              continue;
            }
            currentContent.push(line);
          }
        }

        // Don't forget last section
        if (currentRole && currentContent.length > 0) {
          const content = currentContent.join('\n').replace(/\n---\s*$/, '').trim();
          if (content) {
            loadedMessages.push({
              id: Date.now().toString() + Math.random(),
              role: currentRole,
              content,
              timestamp: new Date().toISOString()
            });
          }
        }
      }

      if (loadedMessages.length > 0) {
        setMessages(loadedMessages);
        // Set current problem from first user message
        const firstUserMsg = loadedMessages.find(m => m.role === 'user');
        if (firstUserMsg) {
          setCurrentProblem(firstUserMsg.content);
        }
      } else {
        setError('Không thể đọc nội dung từ file');
      }
    } catch (err) {
      setError('Lỗi khi đọc file');
    } finally {
      if (mdFileInputRef.current) {
        mdFileInputRef.current.value = '';
      }
    }
  };

  const handleSavePreferredStyle = () => {
    let styleToSave = '';
    let styleLabel = '';

    if (selectedStyle === 'auto') {
      // Use liked explanations as reference
      styleToSave = 'auto';
      const likedExplanations = preference?.likedExplanations || [];
      if (likedExplanations.length > 0) {
        styleLabel = `Phong cách dựa trên các lời giải yêu thích:\n${likedExplanations.slice(-2).join('\n---\n')}`;
      } else {
        styleLabel = 'Phong cách tự động (chưa có dữ liệu yêu thích, sẽ dùng phong cách mặc định)';
      }
    } else if (selectedStyle === 'custom') {
      if (!customStyleInput.trim()) return;
      styleToSave = `custom:${customStyleInput.trim()}`;
      styleLabel = customStyleInput.trim();
    } else if (selectedStyle) {
      const style = LEARNING_STYLES.find(s => s.id === selectedStyle);
      if (style) {
        styleToSave = style.label;
        styleLabel = style.label;
      }
    }

    if (!styleToSave) return;

    const newPreference: TutorPreference = {
      preferredStyle: styleToSave,
      savedSolutions: preference?.savedSolutions || [],
      likedExplanations: preference?.likedExplanations || [],
      updatedAt: new Date().toISOString()
    };

    onSavePreference(newPreference);
    setShowPreferencePopup(false);

    // If in alternative mode, trigger alternative solution with selected style
    if (isAlternativeMode && currentProblem) {
      setIsAlternativeMode(false);
      handleAlternativeSolution(styleLabel);
    }
  };

  const handleLikeExplanation = (messageContent: string) => {
    // Save liked explanation silently to Drive (for AI reference)
    const likedExplanations = [...(preference?.likedExplanations || [])];
    // Keep only last 5 liked explanations to avoid data bloat
    if (likedExplanations.length >= 5) {
      likedExplanations.shift();
    }
    likedExplanations.push(messageContent.slice(0, 1000));

    const newPreference: TutorPreference = {
      preferredStyle: preference?.preferredStyle || '',
      savedSolutions: [...(preference?.savedSolutions || []), messageContent],
      likedExplanations,
      updatedAt: new Date().toISOString()
    };

    onSavePreference(newPreference);
    alert('Đã lưu! AI sẽ tham khảo phong cách này cho các bài sau.');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError('File quá lớn. Vui lòng chọn file nhỏ hơn 5MB');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // Call API to extract text from image
      const response = await fetch('/api/tutor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          extractImage: true,
          imageBase64: base64,
          apiKey,
          model
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Lỗi khi trích xuất text từ ảnh');
      }

      setProblem(data.extractedText);
    } catch (err: any) {
      setError(err.message || 'Có lỗi khi xử lý ảnh');
    } finally {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const renderMarkdown = (text: string) => {
    // Simple markdown rendering - convert basic patterns
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 rounded">$1</code>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Gia Sư AI
          </h2>
          <p className="text-sm text-slate-500">
            {subject} - Lớp {grade}
          </p>
        </div>
        <button
          onClick={() => setShowPreferencePopup(true)}
          className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl flex items-center gap-2 transition-colors text-sm font-medium"
        >
          <Sparkles className="w-4 h-4" />
          Tùy chỉnh phong cách
        </button>
      </div>

      {/* Preference indicator */}
      {preference?.preferredStyle && (
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-sm text-emerald-700 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Phong cách:</span>
          <span>
            {preference.preferredStyle === 'auto'
              ? `Tự động (${preference.likedExplanations?.length || 0} mẫu yêu thích)`
              : preference.preferredStyle.startsWith('custom:')
                ? preference.preferredStyle.replace('custom:', '').slice(0, 50) + (preference.preferredStyle.length > 57 ? '...' : '')
                : preference.preferredStyle}
          </span>
        </div>
      )}

      {/* Topic context banner from LearningTab */}
      {initialTopic && (
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <div className="flex items-center gap-2 text-purple-700 font-medium text-sm mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Chủ đề: {initialTopic}</span>
          </div>
          {initialContext && initialContext.length > 0 && (
            <div className="ml-6">
              <p className="text-xs text-purple-600 mb-1">Yêu cầu cần đạt:</p>
              <ul className="text-xs text-purple-600 space-y-0.5">
                {initialContext.slice(0, 3).map((yc, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-purple-400">•</span>
                    <span>{yc}</span>
                  </li>
                ))}
                {initialContext.length > 3 && (
                  <li className="text-purple-400 italic">...và {initialContext.length - 3} yêu cầu khác</li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Chat container */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="h-96 overflow-y-auto p-4 space-y-4"
        >
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
              <BookOpen className="w-12 h-12 mb-3" />
              <p>Nhập đề bài để bắt đầu học</p>
              <p className="text-xs mt-1">Gia sư AI sẽ giải thích theo phong cách phù hợp với bạn</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  <div
                    className="text-sm leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: msg.role === 'assistant'
                        ? renderMarkdown(msg.content)
                        : msg.content
                    }}
                  />
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => handleLikeExplanation(msg.content)}
                      className="mt-2 flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      Thích cách giải thích này
                    </button>
                  )}
                </div>
              </div>
            ))
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 rounded-2xl px-4 py-3 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                <span className="text-sm text-slate-600">Đang suy nghĩ...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-slate-100 p-4">
          {error && (
            <div className="mb-3 p-3 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-rose-700">{error}</p>
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors disabled:opacity-50"
              title="Upload ảnh đề bài"
            >
              <Upload className="w-5 h-5 text-slate-600" />
            </button>
            <textarea
              ref={textareaRef}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendProblem();
                }
              }}
              placeholder="Nhập đề bài cần giải/ chủ đề cần ôn tập"
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm overflow-y-auto"
              style={{ minHeight: '52px', maxHeight: '200px' }}
              disabled={loading}
            />
            <button
              onClick={handleSendProblem}
              disabled={loading || !problem.trim()}
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      {currentProblem && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setIsAlternativeMode(true);
              setShowPreferencePopup(true);
            }}
            disabled={loading}
            className="px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50 text-sm font-medium"
          >
            <Lightbulb className="w-4 h-4" />
            Giải bằng cách khác
          </button>
          <button
            onClick={handleSimilarProblem}
            disabled={loading}
            className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            Tạo đề tương tự
          </button>
          <button
            onClick={handleNewProblem}
            disabled={loading}
            className="px-4 py-2.5 bg-slate-500 hover:bg-slate-600 text-white rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50 text-sm font-medium"
          >
            <RefreshCw className="w-4 h-4" />
            Bài tập mới
          </button>
          <button
            onClick={handleSaveToMarkdown}
            disabled={loading || messages.length === 0}
            className="px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50 text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            Lưu Bài Giải
          </button>
        </div>
      )}

      {/* Load saved session buttons - show when no current problem */}
      {!currentProblem && (
        <div className="flex flex-wrap gap-2">
          <input
            type="file"
            ref={mdFileInputRef}
            accept=".md,.markdown,.txt"
            onChange={handleLoadFromMarkdown}
            className="hidden"
          />
          <button
            onClick={() => mdFileInputRef.current?.click()}
            disabled={loading}
            className="px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50 text-sm font-medium border border-blue-200"
          >
            <FileUp className="w-4 h-4" />
            Tải Bài Giải đã lưu
          </button>
        </div>
      )}

      {/* Preference popup */}
      {showPreferencePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
              {isAlternativeMode ? (
                <>
                  <Lightbulb className="w-5 h-5 text-indigo-500" />
                  Chọn cách giải khác
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Phong cách học tập
                </>
              )}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {isAlternativeMode
                ? 'Chọn phong cách để AI giải lại bài toán theo cách khác:'
                : 'Chọn phong cách giải thích phù hợp với bạn:'}
            </p>

            {/* Predefined styles */}
            <div className="space-y-2 mb-4">
              {LEARNING_STYLES.map((style) => (
                <label
                  key={style.id}
                  className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer border transition-all ${
                    selectedStyle === style.id
                      ? 'bg-amber-50 border-amber-300'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <input
                    type="radio"
                    name="learningStyle"
                    value={style.id}
                    checked={selectedStyle === style.id}
                    onChange={() => setSelectedStyle(style.id)}
                    className="mt-1 w-4 h-4 text-amber-500 border-slate-300 focus:ring-amber-500"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-slate-800">{style.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{style.description}</div>
                  </div>
                </label>
              ))}

              {/* Custom option */}
              <label
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer border transition-all ${
                  selectedStyle === 'custom'
                    ? 'bg-amber-50 border-amber-300'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <input
                  type="radio"
                  name="learningStyle"
                  value="custom"
                  checked={selectedStyle === 'custom'}
                  onChange={() => setSelectedStyle('custom')}
                  className="mt-1 w-4 h-4 text-amber-500 border-slate-300 focus:ring-amber-500"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm text-slate-800">Tùy chỉnh khác</div>
                  <div className="text-xs text-slate-500 mt-0.5">Nhập phong cách riêng của bạn</div>
                </div>
              </label>
            </div>

            {/* Custom input field */}
            {selectedStyle === 'custom' && (
              <textarea
                value={customStyleInput}
                onChange={(e) => setCustomStyleInput(e.target.value)}
                placeholder="Mô tả phong cách giải thích bạn thích..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm mb-4"
                rows={3}
              />
            )}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowPreferencePopup(false);
                  setIsAlternativeMode(false);
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors text-sm font-medium"
              >
                Hủy
              </button>
              <button
                onClick={handleSavePreferredStyle}
                disabled={!selectedStyle || (selectedStyle === 'custom' && !customStyleInput.trim())}
                className={`px-4 py-2 text-white rounded-xl transition-colors text-sm font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isAlternativeMode
                    ? 'bg-indigo-500 hover:bg-indigo-600'
                    : 'bg-amber-500 hover:bg-amber-600'
                }`}
              >
                {isAlternativeMode ? (
                  <>
                    <Lightbulb className="w-4 h-4" />
                    Giải
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Lưu
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subject mismatch warning popup */}
      {showMismatchWarning && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-amber-600 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Kiểm tra Môn học
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Đề bài này có vẻ thuộc môn <strong className="text-blue-600">{suggestedSubject}</strong>,
              nhưng bạn đang chọn môn <strong className="text-amber-600">{subject}</strong>.
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Bạn có muốn điều chỉnh lại môn học trước khi tiếp tục?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowMismatchWarning(false);
                  setPendingProblem('');
                  setSuggestedSubject('');
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors text-sm font-medium"
              >
                Hủy
              </button>
              <button
                onClick={handleProceedAnyway}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-colors text-sm font-medium"
              >
                Vẫn tiếp tục
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
