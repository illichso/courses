#!/usr/bin/env sh

pwd;
ls -la -a;
chmod +x ./travis/macos/predelete_node.sh;
bash ./travis/macos/predelete_node.sh;

pwd;
ls -la -a;
bash ./travis/delete_node.sh;

pwd;
ls -la -a;
chmod +x ./travis/macos/install_node.sh;
bash ./travis/macos/install_node.sh;