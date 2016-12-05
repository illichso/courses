#!/usr/bin/env sh

echo "Finding node before deleting";
node -v;
npm -v;
echo "Finding and deleting node, node_modules, npm";

#rm -rf /usr/local/lib/node;
#rm -rf /usr/local/lib/node_modules;
#rm -rf /usr/local/include/node;
#rm -rf /usr/local/include/node_modules;
#rm -rf ~/local/node;
#rm -rf ~/local/node_modules;
#rm -rf ~/lib/node;
#rm -rf ~/lib/node_modules;
#rm -rf ~/include/node;
#rm -rf ~/include/node_modules;




sudo rm -rf /usr/local/lib/node;
sudo rm -rf /usr/local/lib/node_modules;
sudo rm -rf /usr/local/include/node;
sudo rm -rf /usr/local/include/node_modules;
sudo rm -rf ~/local/node;
sudo rm -rf ~/local/node_modules;
sudo rm -rf ~/lib/node;
sudo rm -rf ~/lib/node_modules;
sudo rm -rf ~/include/node;
sudo rm -rf ~/include/node_modules;
sudo rm -rf /usr/local/bin/node;
sudo rm -rf /usr/local/bin/npm;
sudo rm -rf /usr/local/lib/dtrace/node*;
sudo rm -rf ~/.npm;
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
sudo rm -rf ~/.npm;
sudo rm -rf ~/.node;
sudo rm -rf ~/.node-gyp;
sudo rm -rf /opt/local/bin/node;
sudo rm -rf /opt/local/include/node;
sudo rm -rf /opt/local/lib/node_modules;
sudo rm -rf /usr/bin/npm;
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp;
sudo rm -rf /var/db/receipts/org.nodejs.*;

echo "Find node after deleting";

echo "sudo find / -name '.npm'"
sudo find / -name ".npm"

echo "sudo find / -name 'npm*'"
sudo find / -name "npm*"

echo "sudo find / -name 'node_modules'"
sudo find / -name "node_modules"

echo "sudo find / -name 'node.*'"
sudo find / -name "node.*"

echo "sudo find / -name 'node'"
sudo find / -name "node"



#echo "Launching sudo find / -name 'node' -exec rm -r '{}' \;"
#sudo find / -name "node" -exec rm -r "{}" \;
#
#echo "Launching sudo find / -name 'node_modules' -exec rm -r '{}' \;"
#sudo find / -name "node_modules" -exec rm -r "{}" \;
#
#echo "Launching sudo find / -name 'npm*' -exec rm -r '{}' \;"
#sudo find / -name "npm*" -exec rm -r "{}" \;

echo "Finding node after deleting";
echo "Trying node -v";
node -v;
echo "Trying npm -v";
npm -v;
