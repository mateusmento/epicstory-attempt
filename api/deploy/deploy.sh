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

# Waiting for epicstory-app instance to launch
echo "Waiting for epicstory-app instance to launch"

aws ec2 wait instance-exists \
  --filters "Name=tag:Name,Values=epicstory-app" \
  --filters "Name=instance-state-name,Values=running"

# Retrieving epicstory-app instance public dns
echo "Retrieving epicstory-app instance public dns"

export APP_HOSTNAME=$(aws ec2 describe-instances \
  --output text \
  --query Reservations[*].Instances[*].PublicDnsName \
  --filters "Name=tag:Name,Values=epicstory-app" | tr -d '\n')

export CORS_ORIGINS="http://$APP_HOSTNAME"

# Run application
echo "Run application"
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_REGISTRY}.dkr.ecr.${AWS_REGION}.amazonaws.com/epicstory-api
docker run -it -d -p 80:3000 -e CORS_ORIGINS=$CORS_ORIGINS ${AWS_REGISTRY}.dkr.ecr.${AWS_REGION}.amazonaws.com/epicstory-api
