# Google Drive Music Upload Setup

## How It Works

Your music files are stored in Google Drive folders, and the website automatically fetches and displays them. No database needed!

## Setup Steps

### 1. Create Google Drive Folders

1. Go to [Google Drive](https://drive.google.com)
2. Create 3 folders:
   - `Bubby's Beats - Cinema`
   - `Bubby's Beats - Video Games`
   - `Bubby's Beats - Beats`

### 2. Make Folders Public

For each folder:
1. Right-click → Share
2. Change to "Anyone with the link"
3. Set permission to "Viewer"
4. Copy the folder ID from the URL (the long string after `/folders/`)
   - Example: `https://drive.google.com/drive/folders/1ABC123xyz...`
   - The ID is: `1ABC123xyz...`

### 3. Get Google Drive API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable "Google Drive API"
   - Go to "APIs & Services" → "Library"
   - Search for "Google Drive API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the API key
5. (Optional) Restrict the API key to only Google Drive API for security

### 4. Add to Environment Variables

Create a `.env.local` file in your project root:

```env
GOOGLE_DRIVE_API_KEY=your_api_key_here
GOOGLE_DRIVE_CINEMA_FOLDER_ID=your_cinema_folder_id
GOOGLE_DRIVE_VIDEOGAMES_FOLDER_ID=your_videogames_folder_id
GOOGLE_DRIVE_BEATS_FOLDER_ID=your_beats_folder_id
```

### 5. Upload Music

Simply drag and drop your music files into the respective Google Drive folders!

**Supported formats:**
- MP3
- WAV
- M4A
- OGG
- FLAC

**File naming tips:**
- Use descriptive names: `Epic-Battle-Theme.mp3`
- The filename becomes the track title (extension removed)
- Avoid special characters

### 6. How Updates Work

- The site caches tracks for 1 hour
- New uploads appear automatically after cache expires
- You can force refresh by redeploying or clearing cache

## Managing Your Music

### Adding New Tracks
1. Upload file to appropriate Google Drive folder
2. Wait ~1 hour for cache to refresh (or redeploy)

### Removing Tracks
1. Delete file from Google Drive folder
2. Changes reflect after cache refresh

### Organizing
- Keep files organized in their category folders
- Use consistent naming conventions
- Consider adding metadata to filenames (e.g., `Epic-Theme-3min.mp3`)

## Limitations

- **Free tier:** 15GB storage across all Google services
- **API quota:** 1,000 requests per day (plenty for a music site)
- **File size:** Individual files up to 5TB (way more than needed)

## Alternative: Upgrade to Vercel Blob

If you want faster updates and more control, consider Vercel Blob Storage:
- Direct uploads through admin panel
- Instant updates (no cache delay)
- Free tier: 500MB
- Pro tier: $0.15/GB

Let me know if you want to implement this instead!
