FROM openjdk

#Creating folder to contain the project
WORKDIR courses

#Add src needed for building the project
COPY src/ src/
COPY build.gradle ./
COPY gradle/ gradle/
COPY gradlew ./

RUN chmod +x ./gradlew

#Buiding the project
RUN ./gradlew assemble

RUN sh -c 'touch build/libs/courses.jar'

EXPOSE 8080

ENTRYPOINT ["java", \
    "-Dspring.data.mongodb.uri=mongodb://db/courses", \
    "-Djava.security.egd=file:/dev/./urandom", \
    "-jar", \
    "build/libs/courses.jar"]
