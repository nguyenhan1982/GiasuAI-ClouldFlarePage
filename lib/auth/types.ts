// Google Identity Services TypeScript definitions
// Using @types/google.accounts for google.accounts.oauth2 types

declare global {
  interface Window {
    google?: typeof google;
  }
}

// Re-export TokenResponse for use in other files
export type TokenResponse = google.accounts.oauth2.TokenResponse;

export interface GoogleUserInfo {
  id: string;
  email: string;
  name: string;
  picture: string;
}

export interface AuthState {
  accessToken: string;
  expiresAt: number;
  userInfo: GoogleUserInfo;
}

export {};
