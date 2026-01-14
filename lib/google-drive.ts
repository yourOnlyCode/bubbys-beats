// Google Drive API helper functions

export interface DriveTrack {
  id: string;
  title: string;
  artist: string;
  category: string;
  duration: string;
  audioUrl: string;
  thumbnailUrl?: string;
  fileId: string;
}

// Folder IDs for each category (you'll need to set these)
const FOLDER_IDS = {
  cinema: process.env.GOOGLE_DRIVE_CINEMA_FOLDER_ID || '',
  videogames: process.env.GOOGLE_DRIVE_VIDEOGAMES_FOLDER_ID || '',
  beats: process.env.GOOGLE_DRIVE_BEATS_FOLDER_ID || '',
};

export async function getTracksFromFolder(category: 'cinema' | 'videogames' | 'beats'): Promise<DriveTrack[]> {
  const folderId = FOLDER_IDS[category];
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!folderId || !apiKey) {
    console.warn('Google Drive not configured');
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink)`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) throw new Error('Failed to fetch from Google Drive');

    const data = await response.json();
    
    return data.files
      .filter((file: any) => file.mimeType.includes('audio'))
      .map((file: any) => ({
        id: file.id,
        title: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
        artist: 'Bubby\'s Beats',
        category,
        duration: '0:00', // You'd need to calculate this separately
        audioUrl: `https://drive.google.com/uc?export=download&id=${file.id}`,
        thumbnailUrl: file.thumbnailLink,
        fileId: file.id,
      }));
  } catch (error) {
    console.error('Error fetching tracks:', error);
    return [];
  }
}

export async function getAllTracks(): Promise<DriveTrack[]> {
  const [cinema, videogames, beats] = await Promise.all([
    getTracksFromFolder('cinema'),
    getTracksFromFolder('videogames'),
    getTracksFromFolder('beats'),
  ]);

  return [...cinema, ...videogames, ...beats];
}
