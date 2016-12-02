#!/usr/bin/env bash

system_profiler SPSoftwareDataType;
cd "$(brew --repo)" && git fetch && git reset --hard origin/master;
brew update;
brew cask update;
brew upgrade;
brew cleanup;
brew cask cleanup;
brew uninstall node --force;
brew install node --force;
