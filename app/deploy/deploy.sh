#!/bin/bash

# Install dependencies
echo "Install dependencies"
yum update -y
yum install git -y
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

# Wait for epicstory-api instance to run
echo "Waiting to retreive epicstory-api ec2 instance public dns"

aws ec2 wait instance-exists \
  --filters "Name=tag:Name,Values=epicstory-api" \
  --filters "Name=instance-state-name,Values=running"

export API_HOSTNAME=$(aws ec2 describe-instances \
  --output text \
  --query Reservations[*].Instances[*].PublicDnsName \
  --filters "Name=tag:Name,Values=epicstory-api")

export API_URL="http://$API_HOSTNAME"

# Build image
echo "Building docker image"
git clone https://github.com/mateusmento/epicstory
cd epicstory/app
git checkout infra/cicd
docker build -t epicstory-app --build-arg API_URL=$API_URL .

# Run application
echo "Run application"
echo "API_HOSTNAME=$API_HOSTNAME"
docker run -it -d --rm -p 80:80 epicstory-app
