FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/app/

# Installing dependencies

COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN rm -f .npmrc

# Copying source files
COPY . .

# EXPOSE PORT
EXPOSE 5000

# Running the app
CMD [ "node", "app.js" ]
