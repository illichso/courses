[![Build Status on UN*X](https://travis-ci.org/illichso/courses.png)](https://travis-ci.org/illichso/courses)
https://ci.appveyor.com/api/github/webhook?id=57lmmhfrdryko12v
<img src="https://ci.appveyor.com/api/github/webhook?id=57lmmhfrdryko12v?svg=true" alt="Project Badge" width="300">
<img src="https://ci.appveyor.com/api/github/webhook?id=57lmmhfrdryko12v?svg=true&passingText=master%20-%20OK" alt="Project Badge">
[![Build Status on Windows](https://ci.appveyor.com/api/github/webhook?id=57lmmhfrdryko12v?svg=true)](https://ci.appveyor.com/api/github/webhook?id=57lmmhfrdryko12v?svg=true)
[![Coverage Status](https://coveralls.io/repos/illichso/courses/badge.png?branch=master)](https://coveralls.io/r/illichso/courses?branch=master)

## Build Status

| windows-vs-x86            | linux-gcc-x86_64            | 
|---------------------------|-----------------------------|
| [![windows-vs-x86][1]]    | [![linux-gcc-x86_64][2]     |

[1]: https://ci.appveyor.com/api/github/webhook?id=57lmmhfrdryko12v?svg=true
[2]: https://travis-ci.org/illichso/courses


## Build Status

| windows-vs-x86            | linux-gcc-x86_64            | osx-clang-x86               |
|---------------------------|-----------------------------|-----------------------------|
| [![windows-vs-x86][1]][2] | [![linux-gcc-x86_64][3]][4] | [![osx-clang-x86][3]][4]

[1]: https://ci.appveyor.com/api/projects/status/5o9gxjcttuaup671/branch/master?svg=true
[2]: https://ci.appveyor.com/project/tritao/CppSharp/branch/master
[3]: https://travis-ci.org/mono/CppSharp.svg?branch=master
[4]: https://travis-ci.org/mono/CppSharp


# Java8 + Spring Boot + Spring Data Rest + MongoDB + Gradle + Groovy + React + Redux + ES6 + Webpack

## What I need to run it in dev mode?
Install Gradle 3.1  
Install Node 7.1.0

Run:

```
For development:
1. gradle clean build
2. gradle bootRun
3. in separate console window: cd frontend && npm start -s
```
Or: 
```
gradle bootRun
gradle npm_install //only on first run, or when package.json dependencies changed
gradle npm_start
```
Or (Recommended):  
Run main method in `Application.java` using IDE of your choice. And then go to frontent module and run
```
npm start -s
```

## How to build for production and run?
Run:
```
gradle clean assemble
cd course-backend/build/libs
java -jar project-template-0.0.1-SNAPSHOT.jar
```
It will
 1. Compile java/groovy classes  
 2. will install npm/node if not installed.
 3. Create minified and compressed js, css, html bundle to /dist folder in "project-template-frontend". Using Webpack
 4. Copy these files to the "/static" folder in jar
 5. ??? PROFIT! Just run the jar with `java -jar nameOfTheBuild.jar`  and app is deployed

##How to develop frontend?
Just run backend as separate service any way you like or  `gradle bootRun`, and proxy all calls to `/api` in browsersync server to `localhost:8080`,
or just use some mockApi and run:
```
npm start -s
```
It will run a server in dev mode with hot reloading and other fancy stuff.

### Of course, it's cool, but how to proxy?!
Just uncomment line 30 in file `srcServer.js` in `/tools` folder in frontend module.

### How to test your UI and don't kill everyone around?
Just run:
```
npm run test:watch
```
### Not happy yet? Want to debug it step by step in the IDEA/WebStorm?  
For IDEA:
 1. Install node plugin.
 2. Go to the run configurations
 3. Create new Mocha test configuration and set it up this way (bellow)
 4. PROFIT! Now you can just run this and it will launch test file by IDE so you can debug it here.

```
Working dir: {YOUR FULL PATH}\project-template\project-frontend-template
Mocha package: \project-template\project-template-frontend\node_modules\mocha
User interface: bdd
Extra Mocha options: tools/testSetup.js
Select: Test file
Choose test file of your choice to test it within IDEA/WebStorm
```
