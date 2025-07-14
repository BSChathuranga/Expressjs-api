# Use the official Node.js 22 LTS image as base
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files first for optimized caching
COPY package*.json ./

# Install only production dependencies (flatten structure)
RUN npm install

# Copy app source
COPY . .

# Expose the app port
EXPOSE 3000

# Define the start command
CMD ["node", "index.js"]
