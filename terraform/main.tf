# Demonstration-only Terraform configuration
# This code defines how QuoteForge could be deployed on AWS using IaC principles.

provider "aws" {
  region = "eu-west-2" # London region
}

# S3 bucket for frontend hosting
resource "aws_s3_bucket" "frontend" {
  bucket = "quote-forge-demo-frontend"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    Name        = "QuoteForge-Frontend"
    Environment = "Demo"
  }
}

# EC2 instance for backend API
resource "aws_instance" "backend" {
  ami           = "ami-0c55b159cbfafe1f0" # Ubuntu 22.04 LTS (for demo)
  instance_type = "t2.micro"

  tags = {
    Name        = "QuoteForge-Backend"
    Environment = "Demo"
  }
}

# Output (demo only)
output "frontend_url" {
  value = "https://${aws_s3_bucket.frontend.bucket}.s3-website-eu-west-2.amazonaws.com"
}
