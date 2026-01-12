# AWS S3 Tutorial

This repository contains a simple Node.js example demonstrating how to interact with AWS S3 using the AWS SDK v3. Specifically, it shows how to generate **presigned URLs** for getting (downloading) and putting (uploading) objects.

## Features

- Generate presigned URLs for `GetObject` (download).
- Generate presigned URLs for `PutObject` (upload).
- Uses ES Modules (`import/export`).

## Prerequisites

- Node.js installed.
- An AWS Account with an S3 bucket created.
- AWS IAM User credentials (`accessKeyId` and `secretAccessKey`) with appropriate S3 permissions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akash1x/aws-s3-tut.git
   cd aws-s3-tut
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

> **Security Warning:** Hardcoding credentials in source code is not recommended for production applications. Consider using environment variables or AWS shared configuration files in a real-world scenario.

To run this example, you need to configure your AWS credentials and bucket details in `index.js`:

1. Open `index.js`.
2. Update the `clientParams` object with your AWS Region and Credentials:
   ```javascript
   const clientParams = {
       region: "ap-south-1", // Your AWS Region
       credentials: {
           accessKeyId: "YOUR_ACCESS_KEY_ID",
           secretAccessKey: "YOUR_SECRET_ACCESS_KEY"
       },
       // ...
   }
   ```
3. Update the `Bucket` name in `getObject` and `putObject` functions:
   ```javascript
   Bucket: "your-bucket-name",
   ```

## Usage

Run the script using Node.js:

```bash
node index.js
```

By default, the script runs the `getObject` function and logs a presigned URL to the console. You can uncomment the `putObject` call in the `init` function to test uploading.
