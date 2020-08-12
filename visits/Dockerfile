# Build the image with the command on the current directory.
# use: "docker build ."
# use: "docker build -t felipeogutierrez/explore-docker/visits ."
# Execute the image
# use: "docker run -p 8080:8080 felipeogutierrez/explore-docker/visits"

# Use an existing docker image as a base
FROM node:alpine

# create a working directory to copy all files from current path to a different directory in the container
WORKDIR /app

# copy all the files on the current directory to the container and install npm dependency
COPY package.json .
RUN npm install
COPY . .

# tell the image what to do when it starts as a container
CMD ["npm", "start"]
