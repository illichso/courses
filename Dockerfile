FROM openjdk:latest
#FROM anapsix/alpine-java:8_jdk

#Creating folder to contain the project
WORKDIR courses

#Add src needed for building the project
ADD backend/ backend/
ADD frontend/ frontend/
ADD gradle/ gradle/
ADD settings.gradle ./
ADD gradlew ./
RUN chmod +x ./gradlew

#Buiding the project
RUN ./gradlew clean build

#Adding built project jar and creating alias for it 'app.jar'
#ADD backend/build/libs/courses.jar /app.jar
RUN sh -c 'touch backend/build/libs/courses.jar'

EXPOSE 8080 3000

ENTRYPOINT ["java", \
    "-Dspring.data.mongodb.uri=mongodb://mongodb/courses", \
    "-Djava.security.egd=file:/dev/./urandom", \
    "-jar", \
    "backend/build/libs/courses.jar"]
