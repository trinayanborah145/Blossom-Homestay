#!/bin/bash
set -e  # Exit on error

# Print environment information
echo "=== Build Environment ==="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $(pwd)"

# Clean up any previous builds
echo -e "\n=== Cleaning up previous build ==="
rm -rf node_modules/.vite
rm -rf dist

# Install dependencies
echo -e "\n=== Installing dependencies ==="
npm install --legacy-peer-deps --prefer-offline --no-audit --progress=false

# List installed dependencies
echo -e "\n=== Installed Dependencies ==="
npm list --depth=0

# Run build
echo -e "\n=== Running build ==="
npm run build

# Verify build output
echo -e "\n=== Build Output ==="
if [ -d "dist" ]; then
  echo "Build successful! Contents of dist/:"
  ls -la dist/
  
  # Check for common build artifacts
  if [ ! -f "dist/index.html" ]; then
    echo "WARNING: index.html not found in dist/ directory"
  fi
  
  if [ ! -d "dist/assets" ]; then
    echo "WARNING: assets directory not found in dist/"
  fi
else
  echo "ERROR: Build failed - dist/ directory not found"
  exit 1
fi

echo -e "\n=== Build completed successfully ==="

