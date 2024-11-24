FROM node:20

# Create the app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Build the app for production
RUN npm run build

# Expose the port for Cloud Run (which defaults to 8080)
EXPOSE 8080

# Command to run the Vite preview server on port 8080
# This ensures Vite listens on the PORT environment variable from Cloud Run
CMD ["sh", "-c", "npm run preview -- --port ${PORT:-8080} --host"]
