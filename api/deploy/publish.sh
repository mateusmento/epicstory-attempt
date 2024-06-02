#!/bin/bash


# Creating AWS ECR repository
aws ecr create-repository --repository-name epicstory-api --region ${AWS_REGION}

# Login docker to AWS ECR
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_REGISTRY}.dkr.ecr.${AWS_REGION}.amazonaws.com

# Build and publish docker image
docker build -t epicstory-api .
docker tag epicstory-api ${AWS_REGISTRY}.dkr.ecr.${AWS_REGION}.amazonaws.com/epicstory-api
docker push ${AWS_REGISTRY}.dkr.ecr.${AWS_REGION}.amazonaws.com/epicstory-api
