#!/bin/bash

# Install dependencies
echo "Install dependencies"
yum update -y
yum install docker -y
systemctl start docker
systemctl enable docker
usermod -aG docker $USER
newgrp docker

# Configure AWS CLI
echo "Configure AWS CLI"
aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}
aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}
aws configure set region ${AWS_REGION}

# Run application
echo "Run application"
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_REGISTRY}.dkr.ecr.${AWS_REGION}.amazonaws.com/epicstory-api
docker run -it -d -p 80:3000 ${AWS_REGISTRY}.dkr.ecr.${AWS_REGION}.amazonaws.com/epicstory-api
