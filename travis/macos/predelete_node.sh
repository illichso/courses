#!/usr/bin/env sh

echo "Running brew uninstall --force node"
brew uninstall --force nvm;
brew uninstall --force n;
brew uninstall --force nodebrew;
brew uninstall --force node-build;
brew uninstall --force nodenv;
brew uninstall --force nodeenv;
brew uninstall --force nave;
brew uninstall --force llnode;
brew uninstall --force node;
echo "brew prune"
brew prune;
echo "brew doctor"
brew doctor;
echo "brew prune"
brew prune;