#!/usr/bin/env sh

chmod +x ./predelete_node.sh;
bash ./predelete_node.sh;

bash ../delete_node.sh;

chmod +x ./install_node.sh;
bash ./install_node.sh;