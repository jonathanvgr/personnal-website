## Build
FROM golang:1.19-alpine AS build
RUN apk --no-cache add gcc g++ make

WORKDIR /app

COPY . ./
RUN go mod download
ENV PRODUCTION=0

RUN go build -o /webserver

## Deploy
FROM alpine:latest

WORKDIR /

COPY --from=build /webserver /webserver

EXPOSE 8080

ENTRYPOINT ["/webserver"]