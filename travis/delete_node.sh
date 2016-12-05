#!/usr/bin/env sh

echo "Finding node before deleting";
node -v;
npm -v;
echo "Finding and deleting node, node_modules, npm";

echo "Launching sudo find / -name 'node' -exec rm -r '{}' \;"
sudo find / -name "node" -exec rm -r "{}" \;

echo "Launching sudo find / -name 'node_modules' -exec rm -r '{}' \;"
sudo find / -name "node_modules" -exec rm -r "{}" \;

echo "Launching sudo find / -name 'npm*' -exec rm -r '{}' \;"
sudo find / -name "npm*" -exec rm -r "{}" \;

echo "Finding node after deleting";
echo "Trying node -v";
node -v;
echo "Trying npm -v";
npm -v;
