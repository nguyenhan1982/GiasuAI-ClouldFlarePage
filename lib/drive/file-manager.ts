// High-level file operations for Google Drive

import {
  findFile,
  readJsonFile,
  writeJsonFile,
  listAppDataFiles,
  deleteFolderRecursively,
  deleteFile,
} from './drive-client';
import { getRootFolderId, getGradingFolderId, clearFolderCache } from './folder-setup';
import { IndexFile, UserSettings, AppDataFile } from './types';
import { GradingSession } from '@/lib/types';

// File ID caching
const fileIdCache = new Map<string, string>();

async function getCachedFileId(
  accessToken: string,
  fileName: string,
  parentId: string
): Promise<string | null> {
  const cacheKey = `${parentId}/${fileName}`;

  if (fileIdCache.has(cacheKey)) {
    return fileIdCache.get(cacheKey)!;
  }

  const fileId = await findFile(accessToken, fileName, parentId);
  if (fileId) {
    fileIdCache.set(cacheKey, fileId);
  }

  return fileId;
}

function setCachedFileId(parentId: string, fileName: string, fileId: string): void {
  const cacheKey = `${parentId}/${fileName}`;
  fileIdCache.set(cacheKey, fileId);
}

export function clearFileIdCache(): void {
  fileIdCache.clear();
}

// Settings operations
export async function readSettings(accessToken: string): Promise<UserSettings | null> {
  const rootId = await getRootFolderId(accessToken);
  const fileId = await getCachedFileId(accessToken, 'settings.json', rootId);

  if (!fileId) return null;
  return readJsonFile<UserSettings>(accessToken, fileId);
}

export async function writeSettings(
  accessToken: string,
  data: UserSettings
): Promise<void> {
  const rootId = await getRootFolderId(accessToken);
  const fileId = await getCachedFileId(accessToken, 'settings.json', rootId);

  const newFileId = await writeJsonFile(
    accessToken,
    fileId,
    'settings.json',
    rootId,
    data
  );

  setCachedFileId(rootId, 'settings.json', newFileId);
}

// Grading sessions operations
export async function readGradingSessions(
  accessToken: string
): Promise<GradingSession[]> {
  const gradingId = await getGradingFolderId(accessToken);
  const fileId = await getCachedFileId(accessToken, 'sessions.json', gradingId);

  if (!fileId) return [];

  const data = await readJsonFile<AppDataFile<GradingSession>>(accessToken, fileId);
  return data?.entries || [];
}

export async function writeGradingSessions(
  accessToken: string,
  sessions: GradingSession[]
): Promise<void> {
  const gradingId = await getGradingFolderId(accessToken);
  const fileId = await getCachedFileId(accessToken, 'sessions.json', gradingId);

  const data: AppDataFile<GradingSession> = {
    version: 1,
    appId: 'grading',
    lastModifiedAt: new Date().toISOString(),
    entries: sessions,
  };

  const newFileId = await writeJsonFile(
    accessToken,
    fileId,
    'sessions.json',
    gradingId,
    data
  );

  setCachedFileId(gradingId, 'sessions.json', newFileId);
}

// Add a new grading session
export async function addGradingSession(
  accessToken: string,
  session: GradingSession
): Promise<GradingSession[]> {
  const sessions = await readGradingSessions(accessToken);
  const updatedSessions = [session, ...sessions];
  await writeGradingSessions(accessToken, updatedSessions);
  return updatedSessions;
}

// Delete a grading session
export async function deleteGradingSession(
  accessToken: string,
  sessionId: string
): Promise<GradingSession[]> {
  const sessions = await readGradingSessions(accessToken);
  const updatedSessions = sessions.filter(s => s.id !== sessionId);
  await writeGradingSessions(accessToken, updatedSessions);
  return updatedSessions;
}

// Index file operations
export async function readIndex(accessToken: string): Promise<IndexFile | null> {
  const rootId = await getRootFolderId(accessToken);
  const fileId = await getCachedFileId(accessToken, 'index.json', rootId);

  if (!fileId) return null;
  return readJsonFile<IndexFile>(accessToken, fileId);
}

export async function writeIndex(
  accessToken: string,
  data: IndexFile
): Promise<void> {
  const rootId = await getRootFolderId(accessToken);
  const fileId = await getCachedFileId(accessToken, 'index.json', rootId);

  const newFileId = await writeJsonFile(
    accessToken,
    fileId,
    'index.json',
    rootId,
    data
  );

  setCachedFileId(rootId, 'index.json', newFileId);
}

// Initialize index file if not exists
export async function initializeIndex(
  accessToken: string,
  userId: string
): Promise<IndexFile> {
  const existing = await readIndex(accessToken);
  if (existing) return existing;

  const newIndex: IndexFile = {
    version: 1,
    userId,
    createdAt: new Date().toISOString(),
    lastSyncedAt: new Date().toISOString(),
    apps: {
      grading: {
        enabled: true,
        lastUsedAt: new Date().toISOString(),
        entryCount: 0,
      },
    },
  };

  await writeIndex(accessToken, newIndex);
  return newIndex;
}

// Delete all app data from Google Drive
export async function deleteAllAppData(accessToken: string): Promise<void> {
  // List all files/folders in appDataFolder
  const files = await listAppDataFiles(accessToken);

  // Find the GiaSuToan6 folder
  const appFolder = files.find(f => f.name === 'GiaSuToan6');

  if (appFolder) {
    // Delete the folder and all its contents
    await deleteFolderRecursively(accessToken, appFolder.id);
  }

  // Clear all caches
  clearFileIdCache();
  clearFolderCache();
}
