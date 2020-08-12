# Build the image with the command on the current directory.
# use: "docker build -t felipeogutierrez/explore-docker/redis-image:latest ."
# Execute the image
# use: "docker run felipeogutierrez/explore-docker/redis-image"

# Use an existing docker image as a base
FROM alpine

# download and istall a dependency
RUN apk add --update redis
RUN apk add --update gcc

# tell the image what to do when it starts as a container
CMD ["redis-server"]
