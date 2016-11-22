FROM openjdk:latest

#Creating folder to contain the project
WORKDIR courses

#Add src needed for building the project
COPY backend/ backend/
COPY frontend/ frontend/
COPY gradle/ gradle/
COPY settings.gradle ./
COPY gradlew ./
RUN chmod +x ./gradlew

#Buiding the project
RUN ./gradlew clean build

RUN sh -c 'touch backend/build/libs/courses.jar'

EXPOSE 8080

ENTRYPOINT ["java", \
    "-Dspring.data.mongodb.uri=mongodb://db/courses", \
    "-Djava.security.egd=file:/dev/./urandom", \
    "-jar", \
    "backend/build/libs/courses.jar"]
