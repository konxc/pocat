---
title: API Overview
description: Complete overview of Pocat API endpoints and features
---

# API Overview

Pocat provides a RESTful API for YouTube video downloading and processing.

## Base URL

**Live API**: `https://nonimitating-corie-extemporary.ngrok-free.dev`

## Core Endpoints

### Create Project & Download Video

```http
POST /v2/projects
```

Download a YouTube video with specified quality and downloader.

**Parameters:**
- `title` (required): Project name
- `youtubeUrl` (required): YouTube video URL  
- `userId` (required): User ID
- `quality` (optional): Video quality (144p-4K, default: 720p)
- `downloader` (optional): Download method (auto, yt-dlp, ytdl-core, puppeteer)

### Access Downloaded Videos

```http
GET /storage/downloads/{filename}
```

Stream or download processed video files.

## Response Format

All API responses follow this structure:

```json
{
  "success": boolean,
  "message": "string",
  "data": object
}
```

## Rate Limits

- **Requests**: 100 per minute per IP
- **Downloads**: 10 concurrent per user
- **File Size**: Up to 2GB per video

## Next Steps

- [Authentication](/api/authentication/) - API authentication methods
- [Video Download](/api/video-download/) - Detailed download endpoint docs
- [Quality Options](/api/quality-options/) - Available quality settings
