#!/usr/bin/env sh

pwd;
chmod +x ./travis/macos/predelete_node.sh;
bash ./travis/macos/predelete_node.sh;

pwd;
bash ./travis/delete_node.sh;

pwd;
chmod +x ./travis/macos/install_node.sh;
bash ./travis/macos/install_node.sh;