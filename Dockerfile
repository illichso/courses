FROM openjdk:8
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

#Installing mongodb
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.2 main" |  tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org
RUN mkdir -p /data/db

#Starting mongodb and building project
RUN nohup mongod & ./gradlew clean startManagedMongoDb build

#Starting backend
RUN nohup ./gradlew bootRun

EXPOSE 27017 8080 3000
