'use client';

import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/lib/auth/auth-context';
import '@/lib/auth/types'; // Import global type declarations

const SCOPES = [
  'openid',
  'email',
  'profile',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.appdata',
].join(' ');

// Storage key for remembering user's email
const USER_EMAIL_KEY = 'giasutoan6_user_email';

interface GoogleLoginButtonProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export default function GoogleLoginButton({
  onSuccess,
  onError,
}: GoogleLoginButtonProps) {
  const { login, isLoggedIn, isLoading } = useAuth();
  const clientRef = useRef<google.accounts.oauth2.TokenClient | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      console.warn('NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set');
      return;
    }

    // Load Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = initializeClient;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [clientId]);

  function initializeClient() {
    if (!window.google || !clientId) return;

    // Get saved email for hint (helps skip account selection)
    const savedEmail = localStorage.getItem(USER_EMAIL_KEY);

    clientRef.current = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: SCOPES,
      callback: handleTokenResponse,
      // Use hint to pre-select the account
      hint: savedEmail || undefined,
      // Use empty prompt to skip consent for returning users who have already granted access
      prompt: '',
    });
    setIsInitialized(true);
  }

  async function handleTokenResponse(response: google.accounts.oauth2.TokenResponse) {
    if (response.error) {
      setIsProcessing(false);
      onError?.(new Error(response.error_description || response.error));
      return;
    }

    try {
      await login(response);
      setIsProcessing(false);
      onSuccess?.();
    } catch (err) {
      setIsProcessing(false);
      onError?.(err as Error);
    }
  }

  function handleClick() {
    if (!clientRef.current) {
      console.error('Google client not initialized');
      return;
    }
    setIsProcessing(true);
    clientRef.current.requestAccessToken();
  }

  if (isLoading) {
    return (
      <button
        disabled
        className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl opacity-50"
      >
        <div className="w-5 h-5 border-2 border-slate-300 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-500 font-medium">Đang tải...</span>
      </button>
    );
  }

  if (isLoggedIn) {
    return null;
  }

  if (!clientId) {
    return (
      <div className="px-6 py-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-700 text-sm">
        Chưa cấu hình Google Client ID
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={!isInitialized || isProcessing}
      className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isProcessing ? (
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )}
      <span className="text-slate-700 font-medium">
        {isProcessing ? 'Đang đăng nhập...' : 'Đăng nhập với Google'}
      </span>
    </button>
  );
}
