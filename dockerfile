# Use Ubuntu as the base image
FROM ubuntu:latest

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the development server
EXPOSE 3000

# Command to start the development server
CMD ["npm", "run", "dev"]
