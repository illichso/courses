#!/usr/bin/env bash

system_profiler SPSoftwareDataType;
echo "Checking if nodejs is installed"
node -v;
echo "Removing previously installed nodejs"
rm -rf /usr/local/lib/node;
rm -rf /usr/local/lib/node_modules;
rm -rf /usr/local/include/node;
rm -rf /usr/local/include/node_modules;
brew uninstall node;
rm -rf ~/local/node;
rm -rf ~/local/node_modules;
rm -rf ~/lib/node;
rm -rf ~/lib/node_modules;
rm -rf ~/include/node;
rm -rf ~/include/node_modules;
rm -rf /usr/local/bin/node;
echo "Checking if nodejs is still installed"
node -v;
npm -v;

echo "Updating brew"
cd "$(brew --repo)" && git fetch && git reset --hard origin/master;
brew update;
brew cask update;
brew upgrade;
brew cleanup;
brew cask cleanup;
brew install node;
