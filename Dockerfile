#FROM frolvlad/alpine-oraclejdk8:slim
FROM java:8-jdk

WORKDIR courses

ADD backend/ backend/

ADD frontend/ frontend/

ADD gradle/ gradle/

ADD settings.gradle/ /courses/

ADD gradlew /courses/

ADD npmw /courses/


RUN ["/bin/bash", "-c", "./gradlew clean build"]
RUN ["/bin/bash", "-c", "./gradlew bootRun"]

EXPOSE 8080
