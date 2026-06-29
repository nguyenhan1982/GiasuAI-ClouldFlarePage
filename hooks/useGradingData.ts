'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/lib/auth/auth-context';
import {
  readGradingSessions,
  writeGradingSessions,
  addGradingSession,
  deleteGradingSession as deleteDriveSession,
  readSettings,
  writeSettings,
  initializeIndex,
  deleteAllAppData,
} from '@/lib/drive/file-manager';
import { clearFolderCache } from '@/lib/drive/folder-setup';
import { clearFileIdCache } from '@/lib/drive/file-manager';
import { UserSettings } from '@/lib/drive/types';
import { GradingSession } from '@/lib/types';

export function useGradingData() {
  const { accessToken, isLoggedIn, user } = useAuth();
  const [sessions, setSessions] = useState<GradingSession[]>([]);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load data from Drive on mount/login
  useEffect(() => {
    if (!isLoggedIn || !accessToken) {
      setIsLoading(false);
      return;
    }

    const token = accessToken; // Capture for closure

    async function loadData() {
      setIsLoading(true);
      setError(null);

      try {
        // Initialize index if needed
        if (user?.id) {
          await initializeIndex(token, user.id);
        }

        // Load sessions and settings in parallel
        const [loadedSessions, loadedSettings] = await Promise.all([
          readGradingSessions(token),
          readSettings(token),
        ]);

        setSessions(loadedSessions);
        setSettings(loadedSettings);
      } catch (err) {
        console.error('Failed to load data from Drive:', err);
        setError('Không thể tải dữ liệu từ Google Drive');
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [isLoggedIn, accessToken, user?.id]);

  // Clear cache on logout
  useEffect(() => {
    if (!isLoggedIn) {
      clearFolderCache();
      clearFileIdCache();
      setSessions([]);
      setSettings(null);
    }
  }, [isLoggedIn]);

  // Add a new session
  const addSession = useCallback(async (session: GradingSession) => {
    // Optimistic update
    setSessions(prev => [session, ...prev]);

    if (accessToken) {
      setIsSyncing(true);
      try {
        await addGradingSession(accessToken, session);
      } catch (err) {
        console.error('Failed to save session to Drive:', err);
        // Revert on error
        setSessions(prev => prev.filter(s => s.id !== session.id));
        setError('Không thể lưu bài làm lên Google Drive');
      } finally {
        setIsSyncing(false);
      }
    }
  }, [accessToken]);

  // Delete a session
  const deleteSession = useCallback(async (sessionId: string) => {
    // Optimistic update
    const previousSessions = sessions;
    setSessions(prev => prev.filter(s => s.id !== sessionId));

    if (accessToken) {
      setIsSyncing(true);
      try {
        await deleteDriveSession(accessToken, sessionId);
      } catch (err) {
        console.error('Failed to delete session from Drive:', err);
        // Revert on error
        setSessions(previousSessions);
        setError('Không thể xóa bài làm khỏi Google Drive');
      } finally {
        setIsSyncing(false);
      }
    }
  }, [accessToken, sessions]);

  // Update a session (e.g., change subject)
  const updateSession = useCallback(async (updatedSession: GradingSession) => {
    // Optimistic update
    const previousSessions = sessions;
    setSessions(prev => prev.map(s => s.id === updatedSession.id ? updatedSession : s));

    if (accessToken) {
      setIsSyncing(true);
      try {
        // Re-write all sessions to persist the update
        const newSessions = previousSessions.map(s => s.id === updatedSession.id ? updatedSession : s);
        await writeGradingSessions(accessToken, newSessions);
      } catch (err) {
        console.error('Failed to update session in Drive:', err);
        // Revert on error
        setSessions(previousSessions);
        setError('Không thể cập nhật bài làm lên Google Drive');
      } finally {
        setIsSyncing(false);
      }
    }
  }, [accessToken, sessions]);

  // Update settings
  const updateSettings = useCallback(async (newSettings: Partial<UserSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    if (accessToken) {
      setIsSyncing(true);
      try {
        await writeSettings(accessToken, updatedSettings);
      } catch (err) {
        console.error('Failed to save settings to Drive:', err);
        setError('Không thể lưu cài đặt lên Google Drive');
      } finally {
        setIsSyncing(false);
      }
    }
  }, [accessToken, settings]);

  // Force sync all data
  const syncAll = useCallback(async () => {
    if (!accessToken) return;

    setIsSyncing(true);
    setError(null);

    try {
      await writeGradingSessions(accessToken, sessions);
      if (settings) {
        await writeSettings(accessToken, settings);
      }
    } catch (err) {
      console.error('Failed to sync data to Drive:', err);
      setError('Không thể đồng bộ dữ liệu lên Google Drive');
    } finally {
      setIsSyncing(false);
    }
  }, [accessToken, sessions, settings]);

  // Refresh data from Drive
  const refresh = useCallback(async () => {
    if (!accessToken) return;

    setIsLoading(true);
    setError(null);

    try {
      const [loadedSessions, loadedSettings] = await Promise.all([
        readGradingSessions(accessToken),
        readSettings(accessToken),
      ]);

      setSessions(loadedSessions);
      setSettings(loadedSettings);
    } catch (err) {
      console.error('Failed to refresh data from Drive:', err);
      setError('Không thể tải lại dữ liệu từ Google Drive');
    } finally {
      setIsLoading(false);
    }
  }, [accessToken]);

  // Delete all app data from Google Drive
  const deleteAllData = useCallback(async () => {
    if (!accessToken) return;

    setIsSyncing(true);
    setError(null);

    try {
      await deleteAllAppData(accessToken);
      // Clear local state
      setSessions([]);
      setSettings(null);
      // Clear caches
      clearFolderCache();
      clearFileIdCache();
    } catch (err) {
      console.error('Failed to delete all data from Drive:', err);
      setError('Không thể xóa dữ liệu từ Google Drive');
      throw err;
    } finally {
      setIsSyncing(false);
    }
  }, [accessToken]);

  return {
    sessions,
    settings,
    isLoading,
    isSyncing,
    error,
    addSession,
    updateSession,
    deleteSession,
    updateSettings,
    syncAll,
    refresh,
    deleteAllData,
  };
}
