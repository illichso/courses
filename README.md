## Build Status

| Linux-x86_64            | macOS-x86_64             | Windows-x86_64            |
|-------------------------|--------------------------|---------------------------|
| [![Linux-86_64][1]][2]  | [![macOS-x86_64][1]][2]  | [![Windows-x86_64][3]][4] 

[1]: https://travis-ci.org/illichso/courses.svg?branch=master
[2]: https://travis-ci.org/illichso/courses
[3]: https://ci.appveyor.com/api/projects/status/57lmmhfrdryko12v/branch/master?svg=true
[4]: https://ci.appveyor.com/project/illichso/courses/branch/master

[![Codecov Status](https://codecov.io/gh/illichso/courses/branch/master/graph/badge.svg)](https://codecov.io/gh/illichso/courses)

[![Coveralls Status](https://coveralls.io/repos/github/illichso/courses/badge.svg?branch=master)](https://coveralls.io/github/illichso/courses?branch=master)


# Java8 + Spring Boot + Spring Data Rest + MongoDB + Gradle + Groovy + React + Redux + ES6 + Webpack

## What I need to run it in dev mode?
```
JDK 8 only.
Java - is included in JDK.
Groovy - is included in JDK.
Gradle - will be installed from gradle-wrapper
Node - will be installed by Gradle.
NPM - will be installed by Gradle.
Fronted dependenices  - will be installed by NPM.
```

Run:

```
For development:
1. gradle clean build
2. gradle bootRun
3. in separate console window: cd frontend && npm start -s
```
Or: 
```
1. gradle bootRun
2. gradle npm_install //only on first run, or when package.json dependencies changed
3. gradle npm_start
```
Or (Recommended):  
Run main method in `Application.java` using IDE of your choice. And then go to frontent module and run
```
npm start -s
```

## How to run docker-compose?


Run:
```
1. docker-compose up -d
2. ./run_tests
3. docker-compose down
```

## How to build for production and run?
Run:
```
1. gradle clean assemble
2. cd course-backend/build/libs
3. java -jar project-template-0.0.1-SNAPSHOT.jar
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
