#!/usr/bin/env sh

docker -v
docker-compose -v;
docker info;
docker images -a;
docker ps -a;
docker network ls;
docker volume ls;
docker-compose up -d;