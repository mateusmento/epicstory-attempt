#!/bin/bash
yum update -y
yum install git -y

echo $(pwd) > /home/file.txt

git clone https://github.com/mateusmento/epicstory
cd epicstory/api
git checkout infra/api-deployment

yum install docker -y
systemctl start docker
systemctl enable docker
usermod -aG docker $USER
newgrp docker

docker build -t epicstory-api .
docker run -it -p 80:3000 epicstory-api
