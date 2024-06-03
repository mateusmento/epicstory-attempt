#!/bin/bash
dir=$1
shift

if { [ "$dir" == "app" ] || [ "$dir" == "api" ]; } && { [ "$1" == "apply" ] || [ "$1" == "destroy" ]; }; then
  subcommand=$1
  service_name="epicstory-$dir"
  service_version=$2
  terraform -chdir="$dir" "$subcommand" --auto-approve \
    -var="AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id | tr -d '\n')" \
    -var="AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key | tr -d '\n')" \
    -var="AWS_REGION=$(aws configure get region | tr -d '\n')" \
    -var="AWS_REGISTRY=$(aws sts get-caller-identity --query "Account" --output text | tr -d '\n')" \
    -var="SERVICE_NAME=$service_name" \
    -var="SERVICE_VERSION=$service_version" \
    -var="LB_NAME_TAG=fullstack-main-lb"
elif { [ "$1" == "apply" ] || [ "$1" == "destroy" ]; }; then
  subcommand=$1
  shift
  terraform -chdir="$dir" "$subcommand" --auto-approve "$@"
else
  terraform -chdir="$dir" "$@"
fi
