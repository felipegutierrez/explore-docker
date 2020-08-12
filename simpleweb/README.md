Buuild the container using tag.
```
docker build -t felipeogutierrez/explore-docker/simpleweb:latest .
```
Run the container and redirect to port 8080.
```
docker run -p 8080:8080 felipeogutierrez/explore-docker/simpleweb
```
Attach the docker client to the running container using to run the `sh` command and verify the files copied to the working directory.
```
felipe@cow-11:~/workspace-vsc/explore-docker/simpleweb$ docker ps
CONTAINER ID        IMAGE                                       COMMAND                  CREATED             STATUS                 PORTS                    NAMES
55af8e8424fd        felipeogutierrez/explore-docker/simpleweb   "docker-entrypoint.s…"   12 seconds ago      Up 10 seconds          0.0.0.0:8080->8080/tcp   friendly_hellman
felipe@cow-11:~/workspace-vsc/explore-docker/simpleweb$ docker exec -it 55af8e8424fd sh
/usr/app # pwd
/usr/app
/usr/app # ls
Dockerfile         README.md          index.js           node_modules       package-lock.json  package.json
/usr/app # cd /
/ # ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
```

