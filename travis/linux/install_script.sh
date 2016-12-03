#!/usr/bin/env sh

sudo apt-get purge --auto-remove nodejs;
sudo curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -;
sudo apt-get install -y nodejs;