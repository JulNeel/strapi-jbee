# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Strapi v5 headless CMS application using TypeScript. It serves as a blog backend with a `Post` content type that supports dynamic content blocks.

## Common Commands

```bash
# Development (with auto-reload)
npm run develop

# Production build
npm run build

# Start production server
npm run start

# Open Strapi console
npm run console

# Deploy to Strapi Cloud
npm run deploy
```

The server runs on `http://localhost:1337` by default.

## Architecture

### Directory Structure

- `config/` - Server, database, middleware, and plugin configuration
- `src/api/` - Content-type definitions, controllers, services, and routes
- `src/components/` - Reusable component schemas for dynamic zones
- `src/admin/` - Admin panel customizations (excluded from server compilation)
- `src/extensions/` - Plugin extensions
- `src/index.ts` - Application lifecycle hooks (register, bootstrap)

### Database

Default: SQLite (`.tmp/data.db`). Supports MySQL and PostgreSQL via `DATABASE_CLIENT` env var.

### Content Types

**Post** (`api::post.post`):
- `title` (string, required)
- `slug` (uid, auto-generated from title)
- `excerpt` (text)
- `image` (media)
- `author` (relation to users-permissions.user)
- `contentBlocks` (dynamic zone with components below)

**Dynamic Zone Components** (`src/components/post/`):
- `text-block` - Rich text content using Strapi blocks editor
- `image-block` - Media with alt, caption, and width options (full/large/medium/small)
- `code-block` - Code snippets with language (js, ts, jsx, tsx, bash, node, css, sass, html), title, and fileName

### API Pattern

Content types follow Strapi's factory pattern:
```typescript
import { factories } from '@strapi/strapi';
export default factories.createCoreController('api::post.post');
```

Controllers, services, and routes are in `src/api/{content-type}/` subdirectories.

## Environment Variables

Key variables (see `config/database.ts` and `config/server.ts`):
- `HOST`, `PORT` - Server binding (default: 0.0.0.0:1337)
- `APP_KEYS` - Application secret keys
- `DATABASE_CLIENT` - sqlite, mysql, or postgres
- `DATABASE_*` - Connection settings for non-SQLite databases
