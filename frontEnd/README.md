# DistanceCalculator

## Description
DistanceCalculator is a Javascript React + Vite app that allows users to calculate the distance between two points. It uses Distance Service API.

## Project Structure

```
.
└── src
    ├── api
    ├── components
    ├── styles
    └── utils
```

- **api**: Calls to Distance Service API.
- **components**: All React components are stored here.
- **styles**: Css styles for various components
- **utils**: Utility functions.

## Common setup

Install dependencies for the front end by running:

```bash
npm install
```

**\*Please Note!** To be able to use DistanceCalculator, Distance Service API should be up and running. Configuration would need to be correct as well.\*

## Development

To start the react server, run the following

```bash
REACT_APP_API_URL=http://localhost:3030/ npm run dev
```
You can also use a bashrc equivalent to store the environmental variable.

## Docker

You can also run this app as a Docker container:

1. Build The Docker Image

```bash
docker build -t distancecalculator .
```

_Provide distance service api URL_

```bash
docker build --build-arg REACT_APP_API_URL=<value> -t distancecalculator .
```

2. Run the Docker container locally:

```bash
docker run -p 3011:3011 -d distancecalculator
```

## Environment Variables

- REACT_APP_API_URL - url of the distance service api