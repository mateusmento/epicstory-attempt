#!/bin/bash

# Installing dependencies
yum update -y
yum install git -y

# Building docker image
git clone https://github.com/mateusmento/epicstory
cd epicstory/api
git checkout infra/api-deployment
docker build -t epicstory-api:0.1.0 .

# Creating AWS ECR repository
aws ecr create-repository --repository-name epicstory-api --region sa-east-1

# Publishing docker image
aws ecr get-login-password --region sa-east-1 | docker login --username AWS --password-stdin 429249706241.dkr.ecr.sa-east-1.amazonaws.com
docker tag epicstory-api:0.1.0 429249706241.dkr.ecr.sa-east-1.amazonaws.com/epicstory-api
docker push 429249706241.dkr.ecr.sa-east-1.amazonaws.com/epicstory-api
