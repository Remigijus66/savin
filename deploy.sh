#!/bin/bash
# Publikavimas. Paleisti: ./deploy.sh
# PowerShell atitikmuo aprašytas deployment.txt - abu daro tą patį.

set -euo pipefail

echo "==> main"
git checkout main

echo "==> npm install"
npm install

echo "==> build"
npm run build   # set -e nutraukia čia, jei build'as krenta

echo "==> dist -> tempDeploy"
rm -rf tempDeploy
cp -r dist tempDeploy

# PRIEŠ PALEIDŽIANT: sustabdyti dev/preview serverius - kitaip liks
# užrakinti esbuild/rollup failai node_modules kataloge
echo "==> deploy šaka"
git checkout deploy
git pull --ff-only origin deploy

echo "==> valomi seni failai"
# viskas, išskyrus .git ir tempDeploy (taip pat ir node_modules -
# jį atkuria kito publikavimo "npm install")
find . -mindepth 1 -maxdepth 1 ! -name .git ! -name tempDeploy -exec rm -rf {} +

echo "==> kopijuojamas naujas build'as"
# "dist/." o ne "dist/*" - kitaip nebūtų nukopijuoti .htaccess ir kiti
# taškiniai failai, o be .htaccess visi adresai išskyrus / duotų 404
cp -r tempDeploy/. .

# svarbu: pašalinti PRIEŠ git add, kitaip tempDeploy pakliūna į commit'ą
# ir svetainėje atsiranda antra kopija (savin.lt/tempDeploy/...)
rm -rf tempDeploy

echo "==> commit + push"
git add -A
git commit -m "deploy $(date +'%Y-%m-%d %H:%M:%S')" || echo "   nieko nepasikeitė"
git push origin deploy

echo "==> grįžtama į main"
git checkout main

echo "✅ Baigta. Plesk -> Pull Now."
echo "   Po to būtinai atidaryti https://savin.lt/duk tiesiogiai -"
echo "   jei atsidaro, .htaccess veikia; jei 404 - serveris jo neskaito."
