#!/usr/bin/env sh

echo "Running sudo apt-get -qq update > /dev/null";
sudo apt-get -qq update > /dev/null;

echo "Running sudo apt-get -qq purge --auto-remove nodejs > /dev/null";
sudo apt-get -qq purge --auto-remove nodejs > /dev/null;

echo "Running sudo curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -;";
sudo curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -;

echo "Running sudo apt-get -qq install -y nodejs > /dev/null";
sudo apt-get -qq install -y nodejs > /dev/null;