'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  saveAuthState,
  loadAuthState,
  clearAuthState,
  fetchUserInfo,
  isTokenValid,
  getValidToken,
} from './google-oauth';
import { GoogleUserInfo, TokenResponse } from './types';

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: GoogleUserInfo | null;
  accessToken: string | null;
  login: (tokenResponse: TokenResponse) => Promise<void>;
  logout: () => Promise<void>;
  getValidToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<GoogleUserInfo | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Hydrate auth state on mount
  useEffect(() => {
    async function hydrate() {
      try {
        const state = await loadAuthState();
        if (state && isTokenValid(state.expiresAt)) {
          setUser(state.userInfo);
          setAccessToken(state.accessToken);
        }
      } catch (err) {
        console.error('Failed to hydrate auth state:', err);
      } finally {
        setIsLoading(false);
      }
    }
    hydrate();
  }, []);

  // Login handler
  const login = useCallback(async (tokenResponse: TokenResponse) => {
    try {
      const userInfo = await fetchUserInfo(tokenResponse.access_token);
      // expires_in is typed as string by @types/google.accounts, convert to number
      const expiresInSeconds = typeof tokenResponse.expires_in === 'string'
        ? parseInt(tokenResponse.expires_in, 10)
        : tokenResponse.expires_in;
      const expiresAt = Date.now() + expiresInSeconds * 1000;

      await saveAuthState({
        accessToken: tokenResponse.access_token,
        expiresAt,
        userInfo,
      });

      // Save user email for future login hints (helps skip account selection)
      if (userInfo.email) {
        localStorage.setItem('giasutoan6_user_email', userInfo.email);
      }

      setUser(userInfo);
      setAccessToken(tokenResponse.access_token);
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  }, []);

  // Logout handler
  const logout = useCallback(async () => {
    try {
      // Revoke token (optional but recommended)
      if (accessToken) {
        await fetch(`https://oauth2.googleapis.com/revoke?token=${accessToken}`, {
          method: 'POST',
        });
      }
    } catch {
      // Ignore revoke errors
    }

    await clearAuthState();
    // Note: We keep the email hint so the user can easily log back in
    // If you want to clear it completely, uncomment the line below:
    // localStorage.removeItem('giasutoan6_user_email');
    setUser(null);
    setAccessToken(null);
  }, [accessToken]);

  const value: AuthContextType = {
    isLoggedIn: !!user && !!accessToken,
    isLoading,
    user,
    accessToken,
    login,
    logout,
    getValidToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
