FROM node:20

# Create the app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Redis
RUN apt-get update && apt-get install -y redis-server

# Expose ports for both the app and Redis
EXPOSE 3001
EXPOSE 6379

# Run Redis in the foreground and then start the Node.js app
CMD redis-server --protected-mode no & npm start
