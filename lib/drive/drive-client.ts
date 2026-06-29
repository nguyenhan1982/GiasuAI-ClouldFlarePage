// Low-level Google Drive API operations

import { DriveFile, DriveListResponse } from './types';

const DRIVE_API_BASE = 'https://www.googleapis.com/drive/v3';
const UPLOAD_API_BASE = 'https://www.googleapis.com/upload/drive/v3';

// Find folder by name
export async function findFolder(
  accessToken: string,
  name: string,
  parentId: string = 'appDataFolder'
): Promise<string | null> {
  const query = `name='${name}' and mimeType='application/vnd.google-apps.folder' and '${parentId}' in parents and trashed=false`;

  const url = `${DRIVE_API_BASE}/files?q=${encodeURIComponent(query)}&spaces=appDataFolder&fields=files(id,name)`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`Find folder failed: ${res.status}`);
  }

  const data: DriveListResponse = await res.json();
  return data.files[0]?.id || null;
}

// Create a new folder
export async function createFolder(
  accessToken: string,
  name: string,
  parentId: string = 'appDataFolder'
): Promise<string> {
  const metadata = {
    name,
    mimeType: 'application/vnd.google-apps.folder',
    parents: [parentId],
  };

  const res = await fetch(`${DRIVE_API_BASE}/files`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(metadata),
  });

  if (!res.ok) {
    throw new Error(`Create folder failed: ${res.status}`);
  }

  const data: DriveFile = await res.json();
  return data.id;
}

// Find or create folder
export async function findOrCreateFolder(
  accessToken: string,
  name: string,
  parentId: string = 'appDataFolder'
): Promise<string> {
  const existingId = await findFolder(accessToken, name, parentId);
  if (existingId) return existingId;
  return createFolder(accessToken, name, parentId);
}

// Find file by name
export async function findFile(
  accessToken: string,
  name: string,
  parentId: string
): Promise<string | null> {
  const query = `name='${name}' and '${parentId}' in parents and trashed=false`;

  const url = `${DRIVE_API_BASE}/files?q=${encodeURIComponent(query)}&spaces=appDataFolder&fields=files(id,name)`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`Find file failed: ${res.status}`);
  }

  const data: DriveListResponse = await res.json();
  return data.files[0]?.id || null;
}

// List files in a folder
export async function listFiles(
  accessToken: string,
  parentId: string,
  mimeType?: string
): Promise<DriveFile[]> {
  let query = `'${parentId}' in parents and trashed=false`;
  if (mimeType) {
    query += ` and mimeType='${mimeType}'`;
  }

  const url = `${DRIVE_API_BASE}/files?q=${encodeURIComponent(query)}&spaces=appDataFolder&fields=files(id,name,mimeType,createdTime,modifiedTime)`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`List files failed: ${res.status}`);
  }

  const data: DriveListResponse = await res.json();
  return data.files;
}

// Read file content
export async function readFile(
  accessToken: string,
  fileId: string
): Promise<string> {
  const url = `${DRIVE_API_BASE}/files/${fileId}?alt=media`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    if (res.status === 404) return '';
    throw new Error(`Read file failed: ${res.status}`);
  }

  return res.text();
}

// Read JSON file
export async function readJsonFile<T>(
  accessToken: string,
  fileId: string
): Promise<T | null> {
  const content = await readFile(accessToken, fileId);
  if (!content) return null;

  try {
    return JSON.parse(content) as T;
  } catch {
    console.error('Failed to parse JSON file');
    return null;
  }
}

// Write JSON file (create or update)
export async function writeJsonFile<T>(
  accessToken: string,
  fileId: string | null,
  fileName: string,
  parentId: string,
  data: T
): Promise<string> {
  const content = JSON.stringify(data, null, 2);
  const blob = new Blob([content], { type: 'application/json' });

  if (fileId) {
    // Update existing file
    const url = `${UPLOAD_API_BASE}/files/${fileId}?uploadType=media`;

    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: blob,
    });

    if (!res.ok) {
      throw new Error(`Update file failed: ${res.status}`);
    }

    return fileId;
  } else {
    // Create new file (multipart upload)
    const metadata = {
      name: fileName,
      mimeType: 'application/json',
      parents: [parentId],
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', blob);

    const url = `${UPLOAD_API_BASE}/files?uploadType=multipart`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: form,
    });

    if (!res.ok) {
      throw new Error(`Create file failed: ${res.status}`);
    }

    const result: DriveFile = await res.json();
    return result.id;
  }
}

// Delete file
export async function deleteFile(
  accessToken: string,
  fileId: string,
  permanent: boolean = false
): Promise<void> {
  if (permanent) {
    const url = `${DRIVE_API_BASE}/files/${fileId}`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!res.ok && res.status !== 404) {
      throw new Error(`Delete file failed: ${res.status}`);
    }
  } else {
    // Move to trash
    const url = `${DRIVE_API_BASE}/files/${fileId}`;

    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trashed: true }),
    });

    if (!res.ok) {
      throw new Error(`Trash file failed: ${res.status}`);
    }
  }
}

// Delete folder and all its contents recursively
export async function deleteFolderRecursively(
  accessToken: string,
  folderId: string
): Promise<void> {
  // First, list all files in the folder
  const files = await listFiles(accessToken, folderId);

  // Delete each file/folder
  for (const file of files) {
    if (file.mimeType === 'application/vnd.google-apps.folder') {
      // Recursively delete subfolders
      await deleteFolderRecursively(accessToken, file.id);
    }
    // Permanently delete the file/folder
    await deleteFile(accessToken, file.id, true);
  }

  // Finally, delete the folder itself
  await deleteFile(accessToken, folderId, true);
}

// List all files in appDataFolder (root level)
export async function listAppDataFiles(
  accessToken: string
): Promise<DriveFile[]> {
  const query = `'appDataFolder' in parents and trashed=false`;

  const url = `${DRIVE_API_BASE}/files?q=${encodeURIComponent(query)}&spaces=appDataFolder&fields=files(id,name,mimeType,createdTime,modifiedTime)`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`List appDataFolder files failed: ${res.status}`);
  }

  const data: DriveListResponse = await res.json();
  return data.files;
}
