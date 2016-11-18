FROM openjdk:latest

#Creating folder to contain the project
WORKDIR courses

#Add src needed for building the project
ADD backend/ backend/
ADD frontend/ frontend/
ADD gradle/ gradle/
ADD settings.gradle ./
ADD gradlew ./
RUN chmod +x ./gradlew

ADD npmw ./
RUN chmod +x ./npmw

#Buiding the project
RUN ./gradlew clean build

#Adding built project jar and creating alias for it 'app.jar'
#ADD backend/build/libs/courses.jar /app.jar
#ADD backend/build/ backend/
RUN sh -c 'touch backend/build/libs/courses.jar'

EXPOSE 8080 3000

ENTRYPOINT ["java", \
    "-Dspring.data.mongodb.uri=mongodb://mongodb/courses", \
    "-Djava.security.egd=file:/dev/./urandom", \
    "-jar","backend/build/libs/courses.jar"]
#ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://192.168.99.100:32772/courses", "-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]


#ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://mongodb/courses", "-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
#ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://mongodb:32772/courses", "-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]

#java -Dspring.data.mongodb.uri=mongodb://192.168.99.100:32769/courses -jar backend/build/libs/courses.jar

