#!/bin/bash

service_name=$1
service_version=$2
AWS_REGISTRY=$(aws sts get-caller-identity --query "Account" --output text | tr -d '\n')
AWS_REGION=$(aws configure get region | tr -d '\n')

echo "Registry: $AWS_REGISTRY"
echo "Region: $AWS_REGION"
cat ~/.aws/config

# Creating AWS ECR repository
aws ecr describe-repositories --repository-names "epicstory-$service_name" > /dev/null 2>&1
if [ $? -ne 0 ]; then
    repo_uri=$(aws ecr create-repository \
        --repository-name "epicstory-$service_name" \
        --region ${AWS_REGION} \
        --query 'repository.repositoryUri' \
        --output text \
        | tr -d '\n')
else
    repo_uri=$(aws ecr describe-repositories \
        --repository-names "epicstory-$service_name" \
        --query 'repository.repositoryUri' \
        --output text \
        | tr -d '\n')
fi

# Login docker to AWS ECR
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin $repo_uri

# Build and publish docker image
WORK_DIR=../$service_name
NODE_VERSION=$(cat $WORK_DIR/.nvmrc | sed 's/^v//')
docker build -f $WORK_DIR/Dockerfile -t epicstory-$service_name:$service_version --build-arg NODE_VERSION=$NODE_VERSION $WORK_DIR
docker tag epicstory-$service_name:$service_version $repo_uri/epicstory-$service_name:$service_version
docker push $repo_uri/epicstory-$service_name:$service_version
