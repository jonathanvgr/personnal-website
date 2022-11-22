## Build
FROM golang:1.19-alpine AS build

WORKDIR /app

RUN apk add build-base

COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY . ./

RUN go build -o /webserver

## Deploy
FROM alpine:latest

WORKDIR /

COPY --from=build /webserver /webserver

EXPOSE 8080

ENTRYPOINT ["/webserver"]