terraform {
  required_version = ">= 1.2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
}

provider "aws" {
  region = "sa-east-1"
}

data "aws_vpc" "default" {
  default = true
}

resource "aws_key_pair" "aws-epicstory" {
  key_name = "aws-epicstory"
  # ssh-keygen -t rsa -f aws-epicstory.pem
  public_key = file("./aws-epicstory.pem.pub")
}

resource "aws_security_group" "epicstory-api-sg" {
  name   = "epicstory-api-sg"
  vpc_id = data.aws_vpc.default.id

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol = "tcp"
    from_port = 22
    to_port = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "epicstory-api-sg"
  }
}

resource "aws_instance" "epicstory-api" {
  ami                    = "ami-05dc908211c15c11d"
  instance_type          = "t2.micro"
  key_name               = "aws-epicstory"
  vpc_security_group_ids = [aws_security_group.epicstory-api-sg.id]
  user_data              = file("./install-epicstory-api.sh")
  tags = {
    Name = "epicstory-api"
  }
}

output "epicstory-api-host" {
  value = aws_instance.epicstory-api.public_dns
}