FROM node:13

# Ensure we have a valid working directory
RUN mkdir -p /app
WORKDIR /app

# Setup linter rules
COPY .eslintrc ./

# Setup project dependencies
COPY package*.json ./
RUN npm install

# Setup the rest of the application
COPY next.config.js ./
COPY src ./src
COPY public ./public 


# Compile the application
RUN npm run build

# Setup starting command
CMD ["npm", "start"]
