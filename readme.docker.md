# Docker
docker build -t andygr1n1/kzen:latest -f Dockerfile.prod .
docker push andygr1n1/kzen:latest
docker run -d -p 9998:9008 andygr1n1/kzen:latest