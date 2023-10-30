### Run locally
via neest
`npm install`
`npm run start-dev`

via docker 
`docker compose up`


Start Jaeger
```
docker run -d --name jaeger \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.41
```
### Deploy
Find demo-key.pm directory
`scp -r -i demo-key.pem /Volumes/CaseSensitive/examples/appointment-app ec2-user@ec2-3-64-10-155.eu-central-1.compute.amazonaws.com:~/`

`ssh -i "demo-key.pem" ec2-user@ec2-3-64-10-155.eu-central-1.compute.amazonaws.com`

start docker compose inside


