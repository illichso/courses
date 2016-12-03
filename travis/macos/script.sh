#!/usr/bin/env sh

system_profiler SPSoftwareDataType;
echo "Checking if nodejs is installed"
node -v;
echo "Removing previously installed nodejs"
sudo rm -rf /usr/local/lib/node;
sudo rm -rf /usr/local/lib/node_modules;
sudo rm -rf /usr/local/include/node;
sudo rm -rf /usr/local/include/node_modules;
echo "Running brew uninstall --force node"
brew uninstall --force node;
echo "brew doctor"
brew doctor;
echo "brew prune"
brew prune;
echo "Manually removing node folders"
sudo rm -rf ~/local/node;
sudo rm -rf ~/local/node_modules;
sudo rm -rf ~/lib/node;
sudo rm -rf ~/lib/node_modules;
sudo rm -rf ~/include/node;
sudo rm -rf ~/include/node_modules;
sudo rm -rf /usr/local/bin/node;
sudo rm -rf /usr/local/bin/npm;
sudo rm -rf /usr/local/lib/dtrace/node.d;
sudo rm -rf ~/.npm;
sudo rm -rf /usr/local/share/man/man1/node.1;
sudo rm -rf /usr/local/share/man/man1/npm*;
sudo rm -rf /usr/local/share/man/man2/node.1;
sudo rm -rf /usr/local/share/man/man2/npm*;
sudo rm -rf /usr/local/share/man/man3/node.1;
sudo rm -rf /usr/local/share/man/man3/npm*;
sudo rm -rf /usr/local/share/man/man4/node.1;
sudo rm -rf /usr/local/share/man/man4/npm*;
sudo rm -rf /usr/local/share/man/man5/node.1;
sudo rm -rf /usr/local/share/man/man5/npm*;
sudo rm -rf /usr/local/share/man/man6/node.1;
sudo rm -rf /usr/local/share/man/man6/npm*;
sudo rm -rf /usr/local/share/man/man7/node.1;
sudo rm -rf /usr/local/share/man/man7/npm*;
sudo rm -rf /usr/local/share/man/man8/node.1;
sudo rm -rf /usr/local/share/man/man8/npm*;
sudo rm -rf /usr/local/share/man/man9/node.1;
sudo rm -rf /usr/local/share/man/man9/npm*;
sudo rm -rf /usr/local/lib/dtrace/node.d;
sudo rm -rf ~/.npm;
sudo rm -rf ~/.node;
sudo rm -rf ~/.node-gyp;
sudo rm -rf /opt/local/bin/node;
sudo rm -rf /opt/local/include/node;
sudo rm -rf /opt/local/lib/node_modules;
sudo rm -rf /usr/bin/npm;
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp;
sudo rm -rf /var/db/receipts/org.nodejs.*;
echo "Checking if nodejs is still installed"
node -v;
npm -v;

echo "Updating brew"
cd "$(brew --repo)" && git fetch && git reset --hard origin/master;
brew update;
brew cask update;
brew upgrade;
brew cleanup;
brew cask cleanup;
brew install node;
