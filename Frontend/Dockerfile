FROM node:20

# Create the app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
