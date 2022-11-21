FROM golang:1.19-alpine

WORKDIR /app

COPY . ./
RUN apk add build-base
RUN go mod download

RUN go build -o /server

EXPOSE 8080

CMD [ "/server" ]
