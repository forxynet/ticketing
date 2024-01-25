# microservices-blog

nodejs and react microservice with kubernetes

## Docker

## docker build -t dynamicq/posts .

## Kubernet

kubectl apply -f posts-depl.yaml
kubectl get deployments
kubectl rollout restart deployment posts-depl
kubectl get pods
kubectl logs posts-depl-847dc5ff4d-bhdrb
kubectl delete services posts-clusterip-srv

kubectl apply -f posts-srv.yaml
kubectl get services
kubectl describe service posts-srv

---

docker build -t dynamicq/event-bus .
docker push dynamicq/event-bus

---

kubectl apply -f event-bus-depl.yaml
docker build -t dynamicq/event-bus .
kubectl get deployments
kubectl rollout restart deployment posts-depl
kubectl rollout restart deployment event-bus-depl
kubectl get pods
kubectl logs posts-depl-679cc565f7-8sq2g
docker build -t dynamicq/client .

---

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

kubectl -n ingress-nginx get pod -o yam

kubectl get pods --namespace=ingress-nginx

kubectl create deployment demo --image=httpd --port=80
deployment.apps/demo created

kubectl expose deployment demo
service/demo exposed

kubectl create ingress demo-localhost --class=nginx \
 --rule="demo.localdev.me/\*=demo:80"
ingress.networking.k8s.io/demo-localhost created

kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080

---

install
choco install -y skaffold

skaffold fix
skaffold dev
