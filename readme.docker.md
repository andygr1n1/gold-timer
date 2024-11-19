# Docker

docker buildx build --platform linux/amd64 -t andygr1n1/kzen:latest -f Dockerfile.prod --push .
docker tag andygr1n1/kzen:latest andygr1n1/kzen:latest
docker push andygr1n1/kzen:latest
