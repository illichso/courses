FROM gomez/openjdk-mongo
#FROM openjdk:8
#FROM frolvlad/alpine-oraclejdk8:slim
#FROM java:8-jdk
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

#Starting mongodb and building project
RUN nohup mongod & ./gradlew clean startManagedMongoDb build

#Starting backend
RUN ./gradlew bootRun

EXPOSE 27017 8080 3000
