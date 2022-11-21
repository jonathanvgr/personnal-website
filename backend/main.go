package main

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/jonathanvgr/website/server"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	server.Run()
}
