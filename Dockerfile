#FROM frolvlad/alpine-oraclejdk8:slim
#FROM java:8-jdk
FROM openjdk:8
#FROM bashell/alpine-bash
#FROM anapsix/alpine-java:latest
#FROM bhuisgen/alpine-java:latest

WORKDIR courses

ADD backend/ backend/

ADD frontend/ frontend/

ADD gradle/ gradle/

ADD settings.gradle ./

ADD gradlew ./

ADD npmw ./

RUN ["/bin/bash", "-c", "mkdir -p /data/db"]

RUN ["/bin/bash", "-c", "ls -la -a"]
RUN ["/bin/bash", "-c", "java -version"]

RUN ["/bin/bash", "-c", "./gradlew build"]
RUN ["/bin/bash", "-c", "/usr/bin/mongod"]

RUN ["/bin/bash", "-c", "./gradlew bootRun"]
RUN ["/bin/bash", "-c", "cd frontend; npm start"]


EXPOSE 27017 8080 3000

ENTRYPOINT ["/usr/bin/mongod", \
            "/bin/bash", "-c", "ls -la -a"]
