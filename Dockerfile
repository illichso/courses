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

#RUN apk add --update curl && rm -rf /var/cache/apk/*
RUN ["/bin/bash", "-c", "ls -la -a"]
RUN ["/bin/bash", "-c", "java -version"]
RUN ["/bin/bash", "-c", "./gradlew clean build"]
#RUN ["/bin/bash", "-c", "./gradlew bootRun"]

EXPOSE 8080

ENTRYPOINT ["/bin/bash", "-c", "ls -la -a"]
