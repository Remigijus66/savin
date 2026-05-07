#!/bin/bash
# to start dev run: npm run dev
# to start run:  ./deploy.sh 

set -e  # exit on error

# Make sure we start on main
git checkout main

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Building project..."
npm run build

echo "🚀 Switching to deploy branch..."
git checkout deploy

echo "🧹 Cleaning old files..."
git rm -rf .

echo "📂 Copying new build..."
cp -r dist/* .

echo "📝 Committing changes..."
git add .
git commit -m "Deploy $(date +'%Y-%m-%d %H:%M:%S')" || echo "⚠️ Nothing to commit"

echo "⬆️  Pushing to GitHub..."
git push origin deploy

echo "🔙 Switching back to main..."
git checkout main

echo "✅ Deployment finished! Go to Plesk and click 'Pull Now'."
