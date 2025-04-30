# CCBR Website Migration

This project serves the existing CCBR website pages while allowing new routes to be handled by a Next.js application.

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
   
## Development

For development with auto-restart:
```
npm run dev
```

## Architecture

- **Express Server (this repo)**: Handles all routing
  - Serves existing HTML pages as-is
  - Forwards new routes (/posts, /admin) to the Next.js app
  
- **Next.js App (separate repo)**: Handles new routes and content
  - Runs on a different port (default: 3001)
  - Only handles /posts and /admin routes

## Configuration

- Default port: 3000 (can be changed via PORT environment variable)
- Next.js URL: http://localhost:3001 (can be changed via NEXTJS_URL environment variable)

## Next.js Setup (in separate directory)

1. Create a new Next.js app:
   ```
   npx create-next-app@latest ccbr-nextjs --typescript
   cd ccbr-nextjs
   ```

2. Configure it to run on port 3001:
   ```
   // package.json
   "scripts": {
     "dev": "next dev -p 3001",
     "build": "next build",
     "start": "next start -p 3001",
     ...
   }
   ```

3. Create routes for /posts and /admin in the Next.js app:
   - pages/posts/index.js
   - pages/posts/[slug].js
   - pages/admin/index.js
   - pages/admin/posts/index.js
   - pages/admin/posts/[id].js

## Running Both Servers

1. Start the Express server (in this directory):
   ```
   npm start
   ```

2. Start the Next.js app (in the separate directory):
   ```
   cd ../ccbr-nextjs
   npm run dev
   ```

3. Access the website at http://localhost:3000
   - Existing pages are served from the Express server
   - /posts and /admin routes are handled by the Next.js app 