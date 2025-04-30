// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const proxy = require('http-proxy');

// Create Express app
const app = express();

// Express server runs on port 3000
const PORT = 3000;

// Next.js app runs on port 3003 in the same directory
const NEXTJS_URL = 'http://localhost:3003';

// Middleware
app.use(morgan('dev')); // Logging
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Add detailed request logging middleware
app.use((req, res, next) => {
  console.log(`\n=== New Request ===`);
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  console.log(`Original URL: ${req.originalUrl}`);
  next();
});

// Serve baseapp directory first
app.use('/baseapp', express.static(path.join(__dirname, 'baseapp')));

// Proxy Next.js static files and API routes
app.use('/_next', createProxyMiddleware({
  target: NEXTJS_URL,
  changeOrigin: true,
  logLevel: 'debug'
}));

// Proxy Next.js API routes
app.use('/api', createProxyMiddleware({
  target: NEXTJS_URL,
  changeOrigin: true,
  logLevel: 'debug'
}));

// Define routes that should be proxied to Next.js
const nextjsRoutes = [
  '/posts',
  '/post',
  '/article',
  '/admin'
];

// Proxy specific routes to Next.js
nextjsRoutes.forEach(route => {
  app.use(route, createProxyMiddleware({
    target: NEXTJS_URL,
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      [`^${route}`]: route // Keep the original path
    }
  }));
});

// Serve static files from the root directory
app.use(express.static(path.join(__dirname), {
  index: false,
  extensions: ['html', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'eot']
}));

// Handle all other routes
app.get('*', (req, res, next) => {
  console.log(`Handling catch-all route: ${req.path}`);
  
  // If the request is for a static file, let express.static handle it
  if (req.path.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
    console.log(`Static file request: ${req.path}`);
    return next();
  }
  
  // For all other routes, try to serve the appropriate HTML file
  const htmlFile = path.join(__dirname, `${req.path}${req.path.endsWith('.html') ? '' : '.html'}`);
  console.log(`Checking for HTML file: ${htmlFile}`);
  
  if (fs.existsSync(htmlFile)) {
    console.log(`Serving HTML file: ${htmlFile}`);
    return res.sendFile(htmlFile);
  }
  
  // If no HTML file exists, serve index.html
  console.log(`No HTML file found, serving index.html`);
  return res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Serving static files from: ${__dirname}`);
  console.log(`Proxying to Next.js at: ${NEXTJS_URL}`);
}); 