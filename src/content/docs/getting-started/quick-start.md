---
title: Quick Start
description: Get started with Pocat API in minutes
---

# Quick Start Guide

Get up and running with Pocat in just a few minutes.

## Live API Endpoint

**Base URL**: `https://nonimitating-corie-extemporary.ngrok-free.dev`

## Basic Usage

Download any YouTube video with a simple POST request:

```bash
curl -X POST https://nonimitating-corie-extemporary.ngrok-free.dev/v2/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Video Project",
    "youtubeUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
    "userId": 1,
    "downloader": "yt-dlp"
  }'
```

## Response

```json
{
  "success": true,
  "message": "Project created, video download started using yt-dlp",
  "data": {
    "projectId": 11,
    "title": "My Video Project",
    "status": "downloading",
    "downloader": "yt-dlp"
  }
}
```

## Access Downloaded Video

Once downloaded, access your video at:
```
https://nonimitating-corie-extemporary.ngrok-free.dev/storage/downloads/project_11_full.mp4
```

## Next Steps

- [API Overview](/api/overview/) - Complete API documentation
- [Quality Options](/api/quality-options/) - Choose the right quality
- [Examples](/examples/basic-usage/) - More usage examples
