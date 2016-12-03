#!/usr/bin/env sh

echo "Finding node before deleting";
node -v;
npm -v;
echo "Finding and deleting node, node_modules, npm";
sudo find / -name "nvm" -exec rm -r "{}" \;
sudo find / -name "nvm-*" -exec rm -r "{}" \;
sudo find / -name "nvm*" -exec rm -r "{}" \;
sudo find / -name "nvm.*" -exec rm -r "{}" \;

sudo find / -name ".nvm" -exec rm -r "{}" \;
sudo find / -name ".nvm-*" -exec rm -r "{}" \;
sudo find / -name ".nvm*" -exec rm -r "{}" \;
sudo find / -name ".nvm.*" -exec rm -r "{}" \;

sudo find / -name "node" -exec rm -r "{}" \;
sudo find / -name "node-*" -exec rm -r "{}" \;
sudo find / -name "node_*" -exec rm -r "{}" \;
sudo find / -name "node.*" -exec rm -r "{}" \;

sudo find / -name ".node" -exec rm -r "{}" \;
sudo find / -name ".node-*" -exec rm -r "{}" \;
sudo find / -name ".node_*" -exec rm -r "{}" \;
sudo find / -name ".node.*" -exec rm -r "{}" \;

sudo find / -name "npm" -exec rm -r "{}" \;
sudo find / -name "npm-*" -exec rm -r "{}" \;
sudo find / -name "npm*" -exec rm -r "{}" \;
sudo find / -name "npm.*" -exec rm -r "{}" \;

sudo find / -name ".npm" -exec rm -r "{}" \;
sudo find / -name ".npm-*" -exec rm -r "{}" \;
sudo find / -name ".npm*" -exec rm -r "{}" \;
sudo find / -name ".npm.*" -exec rm -r "{}" \;

#sudo find / -name "nvm" -o -name ".nvm" -o -name "node" -o -name ".node" -o -name "node_modules" -o -name ".npm"  -o -name "npm*" -exec rm -r "{}" \;

echo "Finding node after deleting";
echo "Trying node -v";
node -v;
echo "Trying npm -v";
npm -v;