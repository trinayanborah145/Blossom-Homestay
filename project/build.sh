#!/bin/bash
set -e  # Exit on error

echo "=== Starting build process ==="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies
echo "\n=== Installing dependencies ==="
npm install --legacy-peer-deps

# Run build
echo "\n=== Running build ==="
npm run build

echo "\n=== Build completed successfully ==="
ls -la dist/
