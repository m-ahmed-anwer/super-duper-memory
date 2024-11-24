FROM node:20

# Create the app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Install Redis
RUN apt-get update && apt-get install -y redis-server

# Expose the necessary ports (3001 for the app, 6379 for Redis)
EXPOSE 3001 6379

# Start Redis and Node.js application
CMD redis-server --daemonize yes && npm start
