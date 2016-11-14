#FROM frolvlad/alpine-oraclejdk8:slim
FROM java:8-jdk
WORKDIR courses

ADD backend/ backend/

ADD frontend/ frontend/

ADD gradle/ gradle/

ADD settings.gradle/ /courses/

ADD gradlew /courses/

ADD npmw /courses/

#RUN ["/bin/bash", "-c", "apt-get update;"]
#RUN ["/bin/bash", "-c", "chmod +x /courses/gradlew;"]
#RUN ["/bin/bash", "-c", "./gradlew clean build"]
#RUN ["/bin/bash", "-c", "gradlew assemble"]
#RUN ["/bin/bash", "-c", "ls -la -a"]

#RUN ["/bin/bash", "-c", "echo hello"]
#                 './gradlew build;'
#        './gradlew build;'

EXPOSE 8080

#CMD echo "This is a test." | wc -
#ENTRYPOINT ["/bin/bash", "-c", "chmod +x ./gradlew;"]
#CMD ["/bin/bash", "-c", "./gradlew clean build"]
#CMD ["/bin/bash", "-c", "ls -la -a"]
#CMD ls -la -a

#ENTRYPOINT ["ls -la -a"]
#RUN ["/bin/bash", "-c", "ls -la -a"]
#CMD ["./gradlew assemble", \
#     "./gradlew build]


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
