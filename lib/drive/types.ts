// Google Drive API types

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  parents?: string[];
  createdTime?: string;
  modifiedTime?: string;
}

export interface DriveListResponse {
  files: DriveFile[];
  nextPageToken?: string;
}

export interface AppDataFile<T> {
  version: number;
  appId: string;
  lastModifiedAt: string;
  entries: T[];
}

export interface IndexFile {
  version: number;
  userId: string;
  createdAt: string;
  lastSyncedAt: string;
  apps: Record<string, {
    enabled: boolean;
    lastUsedAt: string;
    entryCount: number;
  }>;
}

export interface UserSettings {
  apiKey?: string;
  model?: string;
  lastGrade?: number;
  lastSubject?: string;
  studentName?: string;
  tutorPreference?: {
    preferredStyle: string;
    savedSolutions: string[];
    likedExplanations?: string[];
    updatedAt: string;
  };
}
