#!/usr/bin/env sh

echo "Running brew uninstall --force node"
brew uninstall --force node;
echo "brew doctor"
brew doctor;
echo "brew prune"
brew prune;