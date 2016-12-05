#!/usr/bin/env sh

pwd;
bash ./travis/delete_node.sh;

pwd;
chmod +x ./travis/linux/install_node.sh;
bash ./travis/linux/install_node.sh;