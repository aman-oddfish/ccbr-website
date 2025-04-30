const { spawn } = require('child_process');
const path = require('path');

// Function to start a server
function startServer(command, args, options) {
  const childProcess = spawn(command, args, {
    ...options,
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  childProcess.stdout.on('data', (data) => {
    console.log(`${options.cwd ? `[${path.basename(options.cwd)}] ` : ''}${data.toString()}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`${options.cwd ? `[${path.basename(options.cwd)}] ` : ''}${data.toString()}`);
  });

  return childProcess;
}

// Function to wait for a server to be ready
function waitForServer(port, timeout = 30000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkServer = () => {
      const http = require('http');
      const req = http.get(`http://localhost:${port}`, (res) => {
        if (res.statusCode === 200) {
          resolve();
        } else {
          if (Date.now() - startTime > timeout) {
            reject(new Error(`Server on port ${port} did not respond with 200 within ${timeout}ms`));
          } else {
            setTimeout(checkServer, 1000);
          }
        }
      });
      req.on('error', () => {
        if (Date.now() - startTime > timeout) {
          reject(new Error(`Server on port ${port} did not start within ${timeout}ms`));
        } else {
          setTimeout(checkServer, 1000);
        }
      });
    };
    checkServer();
  });
}

// Start Next.js server first (it runs on port 3003)
console.log('Starting Next.js server...');
const nextServer = startServer('npm', ['run', 'dev'], {
  cwd: path.join(process.cwd(), 'ccbr-nextjs'),
  shell: true
});

// Wait for Next.js server to be ready
waitForServer(3003)
  .then(() => {
    console.log('Next.js server is ready, starting Express server...');
    // Start Express server (it runs on port 3000)
    const expressServer = startServer('node', ['server.js'], {
      cwd: process.cwd(),
      shell: true
    });

    // Handle process termination
    process.on('SIGINT', () => {
      console.log('Shutting down servers...');
      expressServer.kill();
      nextServer.kill();
      process.exit();
    });

    process.on('SIGTERM', () => {
      console.log('Shutting down servers...');
      expressServer.kill();
      nextServer.kill();
      process.exit();
    });

    // Handle server crashes
    expressServer.on('close', (code) => {
      console.log('Express server exited with code', code);
      nextServer.kill();
      process.exit(code);
    });

    nextServer.on('close', (code) => {
      console.log('Next.js server exited with code', code);
      expressServer.kill();
      process.exit(code);
    });
  })
  .catch((err) => {
    console.error('Failed to start servers:', err);
    nextServer.kill();
    process.exit(1);
  }); 