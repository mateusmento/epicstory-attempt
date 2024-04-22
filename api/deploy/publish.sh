#!/bin/bash


# Creating AWS ECR repository
aws ecr create-repository --repository-name epicstory-api --region sa-east-1

# Login docker to AWS ECR
aws ecr get-login-password --region sa-east-1 | docker login --username AWS --password-stdin 429249706241.dkr.ecr.sa-east-1.amazonaws.com

# Build and publish docker image
docker build -t epicstory-api:0.1.0 .
docker tag epicstory-api:0.1.0 429249706241.dkr.ecr.sa-east-1.amazonaws.com/epicstory-api
docker push 429249706241.dkr.ecr.sa-east-1.amazonaws.com/epicstory-api
