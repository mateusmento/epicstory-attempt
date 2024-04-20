#!/bin/bash

# Installing dependencies
yum update -y
yum install git -y
yum install docker -y
systemctl start docker
systemctl enable docker
usermod -aG docker $USER
newgrp docker

# Building docker image

git clone https://github.com/mateusmento/epicstory
cd epicstory/app
git checkout infra/app-deployment
docker build -t epicstory-app .

# Running application

docker run -it -d -p 80:3000 epicstory-app
