# explore-docker with Kubernetes

[![Build Status](https://travis-ci.org/felipegutierrez/explore-docker.svg?branch=master)](https://travis-ci.org/felipegutierrez/explore-docker)

The Docker compose images can be found at [https://hub.docker.com/u/felipeogutierrez](https://hub.docker.com/u/felipeogutierrez):
 - [explore-docker-complex-client](https://hub.docker.com/r/felipeogutierrez/explore-docker-complex-client)
 - [explore-docker-complex-server](https://hub.docker.com/r/felipeogutierrez/explore-docker-complex-server)
 - [explore-docker-complex-worker](https://hub.docker.com/r/felipeogutierrez/explore-docker-complex-worker)
 - [explore-docker-complex-nginx](https://hub.docker.com/r/felipeogutierrez/explore-docker-complex-nginx)

## Kubernetes demo

This is the ![complex](complex) project. Instanll Kubernetes on the local machine following this [link](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux).
```
$ kubectl version
$ minikube version
$ minikube start
$ minikube status
$ kubectl version
$ kubectl cluster-info
```
Create a Pod on kubernetes:
```
$ cd simplek8s/
simplek8s$ ll
-rw-rw-r-- 1 felipe felipe  189 Sep  1 14:37 client-node-port.yaml
-rw-rw-r-- 1 felipe felipe  206 Sep  1 14:07 client-pod.yaml
$ kubectl apply -f client-pod.yaml 
pod/client-pod created
$ kubectl apply -f client-node-port.yaml 
service/client-node-port created
$ kubectl get pods -o wide
NAME         READY   STATUS    RESTARTS   AGE
client-pod   1/1     Running   0          2m9s
$ kubectl get services
NAME               TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
client-node-port   NodePort    10.111.99.76   <none>        3050:31515/TCP   62s
kubernetes         ClusterIP   10.96.0.1      <none>        443/TCP          97m
$ minikube ip
172.17.0.3
$ eval $(minikube docker-env)
$ docker ps
$ kubectl describe pod client-pod
$ kubectl describe service client-node-port
$ kubectl delete -f client-pod.yaml
$ kubectl get pods -o wide
$ kubectl apply -f client-deployment.yaml
$ kubectl get deployments
```
Then access [http://172.17.0.3:31515/](http://172.17.0.3:31515/).

## Kubernetes with docker images
This is the ![complex-kubernetes](complex-kubernetes) project.
Create the secretes:
```
$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=pgpassword
secret/pgpassword created
$ kubectl get secrets
NAME                  TYPE                                  DATA   AGE
default-token-fddxd   kubernetes.io/service-account-token   3      23h
pgpassword            Opaque                                1      10s
```
```
$ kubectl get deployments
$ kubectl delete deployment client-deployment
$ kubectl get pods
$ kubectl get services
$ kubectl delete service client-node-port
$ docker ps
$ kubectl apply -f k8s
```


