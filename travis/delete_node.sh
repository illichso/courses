#!/usr/bin/env sh

echo "Finding node before deleting";
node -v;
npm -v;
#echo "Finding and deleting node, node_modules, npm";

echo "Removing previously installed nodejs"
sudo rm -rf /usr/local/lib/node*;
sudo rm -rf /usr/local/include/node*;
echo "Manually removing node folders"
sudo rm -rf ~/local/node*;
sudo rm -rf ~/lib/node*;
sudo rm -rf ~/include/node*;
sudo rm -rf /usr/local/bin/node*;
sudo rm -rf /usr/local/bin/npm*;
sudo rm -rf /usr/local/lib/dtrace/node.d;
sudo rm -rf /usr/local/share/man/man1/node*;
sudo rm -rf /usr/local/share/man/man1/npm*;
sudo rm -rf /usr/local/share/man/man2/node*;
sudo rm -rf /usr/local/share/man/man2/npm*;
sudo rm -rf /usr/local/share/man/man3/node*;
sudo rm -rf /usr/local/share/man/man3/npm*;
sudo rm -rf /usr/local/share/man/man4/node*;
sudo rm -rf /usr/local/share/man/man4/npm*;
sudo rm -rf /usr/local/share/man/man5/node*;
sudo rm -rf /usr/local/share/man/man5/npm*;
sudo rm -rf /usr/local/share/man/man6/node*;
sudo rm -rf /usr/local/share/man/man6/npm*;
sudo rm -rf /usr/local/share/man/man7/node*;
sudo rm -rf /usr/local/share/man/man7/npm*;
sudo rm -rf /usr/local/share/man/man8/node*;
sudo rm -rf /usr/local/share/man/man8/npm*;
sudo rm -rf /usr/local/share/man/man9/node*;
sudo rm -rf /usr/local/share/man/man9/npm*;
sudo rm -rf /usr/local/lib/dtrace/node.d;
sudo rm -rf ~/.npm;
sudo rm -rf ~/.node*;
sudo rm -rf /opt/local/bin/node;
sudo rm -rf /opt/local/include/node;
sudo rm -rf /opt/local/lib/node*;
sudo rm -rf /usr/bin/npm;
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp;
sudo rm -rf /var/db/receipts/org.nodejs.*;
sudo rm -rf ~/.nvm;
sudo rm -rf /usr/local/Cellar/node;

echo "Finding node after deleting";
echo "Trying node -v";
node -v;
echo "Trying npm -v";
npm -v;
