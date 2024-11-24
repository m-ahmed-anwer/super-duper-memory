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

# Expose the ports
EXPOSE 3001 6379

# Start the app
CMD redis-server --daemonize no & npm start
