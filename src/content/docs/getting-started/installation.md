---
title: Installation
description: How to install and setup Pocat
---

# Installation

Learn how to install and setup Pocat for development or production use.

## Using the Live API

The easiest way to get started is using our live API endpoint:

**Base URL**: `https://nonimitating-corie-extemporary.ngrok-free.dev`

No installation required - just start making requests!

## Self-Hosted Installation

### Prerequisites

- Node.js 18+ 
- pnpm
- Python 3.8+ (for yt-dlp)
- FFmpeg

### Clone Repository

```bash
git clone https://github.com/konxc/pocat-api.git
cd pocat-api
```

### Install Dependencies

```bash
pnpm install
```

### Environment Setup

```bash
cp .env.example .env
# Edit .env with your configuration
```

### Run Development Server

```bash
pnpm run dev
```

Your API will be available at `http://localhost:3333`

## Docker Installation

```bash
docker pull pocat/api:latest
docker run -p 3333:3333 pocat/api:latest
```

## Next Steps

- [Quick Start](/getting-started/quick-start/) - Make your first API call
- [API Overview](/api/overview/) - Learn about available endpoints
