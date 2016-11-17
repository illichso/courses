FROM openjdk:latest

WORKDIR courses

ADD backend/ backend/
ADD frontend/ frontend/
ADD gradle/ gradle/
ADD settings.gradle ./
ADD gradlew ./

ADD npmw ./
RUN chmod +x ./npmw

ADD backend/src/main/docker/application.properties      backend/src/main/resources/application.properties
RUN chmod +x backend/src/main/resources/application.properties

RUN chmod +x ./gradlew
RUN ./gradlew clean build

EXPOSE 8080 3000

ENTRYPOINT ["/bin/bash", "-c", "./gradlew bootRun"]
