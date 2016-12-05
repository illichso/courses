#!/usr/bin/env sh

sudo apt-get -qq update;
sudo apt-get -qq purge --auto-remove nodejs;
sudo curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -;
sudo apt-get -qq install -y nodejs;