#!/usr/bin/env sh

echo "Installing node"
cd "$(brew --repo)" && git fetch && git reset --hard origin/master;
brew update;
brew cask update;
brew upgrade;
brew cleanup;
brew cask cleanup;
brew install node;
