#!/bin/bash

# Install dependencies

yum update -y
yum install docker -y
systemctl start docker
systemctl enable docker
usermod -aG docker $USER
newgrp docker

# Run application

aws ecr get-login-password --region sa-east-1 | docker login --username AWS --password-stdin 429249706241.dkr.ecr.sa-east-1.amazonaws.com
docker run -it -d -p 80:3000 429249706241.dkr.ecr.sa-east-1.amazonaws.com/epicstory-api
