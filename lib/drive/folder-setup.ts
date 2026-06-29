// Google Drive folder structure setup

import { findOrCreateFolder } from './drive-client';

/*
 * Folder structure in appDataFolder:
 * /GiaSuToan6/
 *   ├── index.json             # Global metadata
 *   ├── settings.json          # User settings (API key, model, etc.)
 *   └── grading/               # Grading sessions data
 *       └── sessions.json      # All grading sessions
 */

const ROOT_FOLDER_NAME = 'GiaSuToan6';

interface FolderIds {
  root: string;
  grading: string;
}

// Cache folder IDs in memory
let cachedFolderIds: FolderIds | null = null;

export async function setupFolderStructure(accessToken: string): Promise<FolderIds> {
  if (cachedFolderIds) {
    return cachedFolderIds;
  }

  // Create/find root folder in appDataFolder
  const rootId = await findOrCreateFolder(accessToken, ROOT_FOLDER_NAME, 'appDataFolder');

  // Create/find grading subfolder
  const gradingId = await findOrCreateFolder(accessToken, 'grading', rootId);

  cachedFolderIds = {
    root: rootId,
    grading: gradingId,
  };

  return cachedFolderIds;
}

export function clearFolderCache(): void {
  cachedFolderIds = null;
}

export async function getRootFolderId(accessToken: string): Promise<string> {
  const folders = await setupFolderStructure(accessToken);
  return folders.root;
}

export async function getGradingFolderId(accessToken: string): Promise<string> {
  const folders = await setupFolderStructure(accessToken);
  return folders.grading;
}
