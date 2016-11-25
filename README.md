# Java8 + Spring Boot + Spring Data Rest + MongoDB + Gradle + Groovy + React + Redux + ES6 + Webpack + Docker

## Status
| Linux-x86_64         | macOS-x86_64          | Windows-x86_64          | Docker_build          |License           |
|----------------------|-----------------------|-------------------------|-----------------------|------------------|
|[![Linux-86_64][1]][2]|[![macOS-x86_64][1]][2]|[![Windows-x86_64][3]][4]|[![Docker_build][5]][6]|[![License][7]][8]|

[1]: https://travis-ci.org/illichso/courses.svg?branch=master
[2]: https://travis-ci.org/illichso/courses
[3]: https://ci.appveyor.com/api/projects/status/57lmmhfrdryko12v/branch/master?svg=true
[4]: https://ci.appveyor.com/project/illichso/courses/branch/master
[5]: https://img.shields.io/docker/automated/illichso/courses.svg
[6]: https://hub.docker.com/r/illichso/courses/builds/
[7]: https://img.shields.io/github/license/srs/gradle-node-plugin.svg
[8]: http://www.apache.org/licenses/LICENSE-2.0.html

[![Codecov Status](https://codecov.io/gh/illichso/courses/branch/master/graph/badge.svg)](https://codecov.io/gh/illichso/courses)

[![Coveralls Status](https://coveralls.io/repos/github/illichso/courses/badge.svg?branch=master)](https://coveralls.io/github/illichso/courses?branch=master)


#Production run
##Production run via docker
You will need installed:

[Docker](https://docs.docker.com/engine/installation/)

You don't need to have either java, or nodejs, or gradle, or MongoDB installed.
Only cloned repository and docker installed.
Docker will deploy everything via docker images which have java, mongoDD and other necessary tools installed

After installation, run via terminal in folder with cloned repository:
```
$ docker-compose up -d
```

After it is finished, open in browser:

[http://192.168.99.100:8080/](http://192.168.99.100:8080/)


##Production run without docker

You will need installed:

[JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)

[MongoDB](https://docs.mongodb.com/manual/installation/)


Gradle - will be installed from gradle-wrapper;

Groovy - will be installed by Gradle;

Node - will be installed by Gradle;

NPM - will be installed by Gradle;

Fronted dependenices  - will be installed by NPM.


Run via terminal in folder with cloned repository:

```
1. $ ./gradlew clean build
2. $ java -jar backend/build/libs/courses.jar
```
Or: 
```
$ ./gradlew bootRun
$ ./gradlew npm_install //only on first run, or when package.json dependencies changed
$ ./gradlew npm_start
```
Or (Recommended):  
Run main method in `Application.java` using IDE of your choice. And then go to frontent module and run
```
npm start -s
```
