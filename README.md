### Run locally
via neest
`npm install`
`npm run start-dev`

via docker 
`docker compose up`

### Deploy
Find demo-key.pm directory
`scp -r -i demo-key.pem /Volumes/CaseSensitive/examples/appointment-app ec2-user@ec2-3-64-10-155.eu-central-1.compute.amazonaws.com:~/`

`ssh -i "demo-key.pem" ec2-user@ec2-3-64-10-155.eu-central-1.compute.amazonaws.com`

start docker compose inside


