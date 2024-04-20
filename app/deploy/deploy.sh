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
cd epicstory
git checkout infra/app-deployment
cd app
docker build -t epicstory-app .

# Running application

docker run -it -d -p 80:80 epicstory-app
