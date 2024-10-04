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

Copy archive and unzip it

```
unzip vae.zip
cd vae
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
cd ~/WORKING.DIR/vae
npm install
```
### if necessary make current chromedriver 
```
npm uninstall chromedriver
npm install chromedriver

```

# Run in the terminal
```
yarn current-specs

yarn api

```
