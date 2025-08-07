# Use Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project (including public/, index.js, etc.)
COPY . .

# Expose port 3000 to the outside
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
