#!/usr/bin/env sh

pwd;
ls -la -a;
bash ./travis/delete_node.sh;

pwd;
ls -la -a;
chmod +x ./travis/linux/install_node.sh;
bash ./travis/linux/install_node.sh;