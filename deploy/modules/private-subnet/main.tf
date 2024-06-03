variable "vpc_id" {
  type = string
}

variable "availability_zone" {
  type = string
}

variable "cidr_block" {
  type = string
}

variable "nat_subnet_id" {
  type = string
}

data "aws_vpc" "main" {
  id = var.vpc_id
}

locals {
  vpc = data.aws_vpc.main
}

resource "aws_subnet" "private" {
  vpc_id                  = local.vpc.id
  availability_zone       = var.availability_zone
  cidr_block              = var.cidr_block
  map_public_ip_on_launch = false
  tags = {
    Name = "fullstack-private-subnet"
  }
}

resource "aws_eip" "nat" {
  vpc = true
  tags = {
    Name = "fulltstack-nat-eip"
  }
}

resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = var.nat_subnet_id
  tags = {
    Name = "fullstack-nat-gw"
  }
}

resource "aws_route_table" "private" {
  vpc_id = local.vpc.id
  route {
    nat_gateway_id = aws_nat_gateway.nat.id
    cidr_block     = "0.0.0.0/0"
  }
  tags = {
    Name = "fullstack-rt"
  }
}

resource "aws_route_table_association" "private" {
  subnet_id      = aws_subnet.private.id
  route_table_id = aws_route_table.private.id
}

output "subnet" {
  value = aws_subnet.private
}