#FROM gomez/openjdk-mongo
FROM openjdk:latest
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
RUN chmod +x ./gradlew
RUN ./gradlew clean build

EXPOSE 8080 3000
#EXPOSE 8080 3000

#ENTRYPOINT ["./gradlew bootRun"]

#ENTRYPOINT ["./gradlew bootRun", \
##            "./npmw start", \
#            "spring.data.mongodb.uri=mongodb://db/courses"]
##            "spring.data.mongodb.port=27017"]

