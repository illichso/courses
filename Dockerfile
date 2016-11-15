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

#Installing mongodb
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.2 main" |  tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org
RUN mkdir -p /data/db

#Starting mongodb
RUN mongod
#Verifying mongodb
RUN [initandlisten] waiting for connections on port 27017
#RUN ["/bin/bash", "-c", "mkdir -p /data/db"]

RUN ["/bin/bash", "-c", "ls -la -a"]
RUN ["/bin/bash", "-c", "java -version"]

#RUN ["/bin/bash", "-c", "./gradlew build"]
#RUN ["/bin/bash", "-c", "/usr/bin/mongod"]

#RUN ["/bin/bash", "-c", "./gradlew bootRun"]
#RUN ["/bin/bash", "-c", "cd frontend; npm start"]


EXPOSE 27017 8080 3000

#ENTRYPOINT ["/usr/bin/mongod", \
#            "/bin/bash", "-c", "ls -la -a"]
