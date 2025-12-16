# 🚀 Development Guide

## Quick Start

```bash
# Clone with submodules
git clone --recursive git@github.com:konxc/pocat.git
cd pocat

# Install all dependencies
pnpm run install:all

# Start both backend and frontend
pnpm run dev
```

## Available Scripts

### Development
- `pnpm run dev` - Start both backend and frontend concurrently
- `pnpm run dev:backend` - Start only backend (AdonisJS)
- `pnpm run dev:frontend` - Start only frontend (React)

### Build
- `pnpm run build` - Build both projects
- `pnpm run build:backend` - Build only backend
- `pnpm run build:frontend` - Build only frontend

### Setup
- `pnpm run install:all` - Install dependencies for all projects
- `pnpm run clean` - Clean all node_modules

## Environment Setup

### Backend (.env)
```bash
cd backend
cp .env.example .env
# Edit with your Turso credentials
```

### Database Migration
```bash
cd backend
pnpm run ace migrate:turso
```

## Development URLs

- **Backend API**: http://localhost:3333
- **Frontend**: http://localhost:5173
- **API Docs**: http://localhost:3333/docs (if available)

## Submodule Updates

```bash
# Update submodules to latest
git submodule update --remote

# Pull latest changes in submodules
git submodule foreach git pull origin main
```
