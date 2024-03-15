# Distance Service API

## Description
The Distance Service API is a minimal Express.js backend service. It is configured to run standalone (SERVER_MODE) or in a serverless state so it can be quickly deployed to AWS Lambda.


## Project Structure

```
.
└── src
    ├── external
    ├── handlers
    ├── routes
    └── utils
```

- **external**: Functions that handle external API calls
- **handlers**: Functions that handle individual routes
- **routes**: [Express routes](https://expressjs.com/en/guide/routing.html)
- **utils**: Utility functions

## Common Setup

Install dependencies by running the following command:

```bash
npm install
```

## Development

To start the server, run the following command:

```bash
npm run dev
```

## Docker

You can run this app as a Docker container:

Step 1: Build the Docker image

```bash
docker build -t distanceapi .
```

Step 2: Run the Docker container locally:

```bash
docker run -p 3030:3030 -d distanceapi
```

## Environment Variables

- SERVER_MODE - set it, unless it's deployed in AWS lambda
- PORT - desired port number