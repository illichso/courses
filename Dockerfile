#FROM frolvlad/alpine-oraclejdk8:slim
FROM java:8-jdk
VOLUME /tmp

#VOLUME /backend/build

#ADD @project.build.finalName@.jar courses-0.0.1-SNAPSHOT.jar

ADD backend .

ADD frontend .

ADD gradle .

ADD gradlew .

RUN sh -c ' chmod +x ./gradlew; '\
                 './gradlew build;'
#        './gradlew build;'

EXPOSE 8080

ENTRYPOINT ["java", \
  "-Djava.security.egd=file:/dev/./urandom", \
  "-Djcr.repo.url=http://courses:8080", \
  "-Dserver.port=8080", \
  "-jar", "/courses-0.0.1-SNAPSHOT.jar", \
  "--spring.config.location=file:/application.yml"]


## This is Dockerfile that defines build environment.
#FROM frolvlad/alpine-oraclejdk8:slim
##FROM webratio/groovy:2.4.4
##FROM openjdk:8-jdk
##FROM java:8-jdk
#
## install Docker
#ENV DOCKER_VERSION=1.12.3
#RUN curl -sSL -O https://get.docker.com/builds/Linux/x86_64/docker-${DOCKER_VERSION} \
#    && chmod +x docker-${DOCKER_VERSION} \
#    && mv docker-${DOCKER_VERSION} /usr/local/bin/docker
#
## install docker-compose
#ENV COMPOSE_VERSION 1.8.1
#RUN curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-Linux-x86_64" \
#	&& chmod +x /usr/local/bin/docker-compose
#
## allow to bind local Docker to the outer Docker
#VOLUME /var/run/docker.sock
#
#VOLUME /backend/build
#WORKDIR /backend/build
#
#ENTRYPOINT ["./gradlew"]
#CMD ["chmod +x ./gradlew", "./gradlew build"]
