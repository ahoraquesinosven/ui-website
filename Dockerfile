FROM node:13

# Ensure we have a valid working directory
RUN mkdir -p /app
WORKDIR /app

# Setup project dependencies
COPY package*.json ./
RUN npm install

# Setup the pages
COPY pages ./pages
COPY components ./components

# Compile the application
RUN npm run build

# Setup starting command
CMD ["npm", "start"]
