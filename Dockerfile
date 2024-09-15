# Use the official Node.js 16 image as the base image
FROM node:16 as builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN REACT_APP_ROOT_SERVER=http://192.168.49.2:30000 npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:1.21-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy the built app from the previous stage to Nginx's web directory

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
