Automation Scripts
---

### Getting Started
This test suite uses Protractor, Jasmine, Typescript

Go to the new work directory, ie. WORKING.DIR

```
cd ~
mkdir -p ~/WORKING.DIR
cd ~/WORKING.DIR/

```

clone project into working directory

```
git clone https://github.com/elenanenashev/sans.git
cd sans
```

### Install npm, node, yarn
Follow OS specific instructions from https://www.npmjs.com/get-npm

For MacOS

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install node
brew install yarn
```

Verify it is installed with
```
npm -v
node -v
```  

Packages to be installed are in package.json file.


### Install packages
(from package.json) by running following command
```
cd ~/WORKING.DIR/sans
npm install
```
### Verify webdriver-manager 
```
node_modules/webdriver-manager/bin/webdriver-manager version

```

### Webdriver binaries
```
yarn webdriver
```

### Running Instructions
# Window 1
```
yarn http-server
```

# Window 2
```
yarn current-specs

```
