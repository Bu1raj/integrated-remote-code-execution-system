# Use the devcontainers Python image
FROM mcr.microsoft.com/devcontainers/python:3.11

# Set the working directory
WORKDIR /usr/src/app

# Install necessary tools
RUN apt-get update && apt-get install -y gcc g++ nodejs npm

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm cache clean --force

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Compile TypeScript files
RUN npx tsc

# Set the entry point to run the test script
CMD ["npx", "ts-node", "test2.ts"]
