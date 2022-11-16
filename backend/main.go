package main

import (
	"github.com/jonathanvgr/website/db"
	"github.com/jonathanvgr/website/server"
)

func main() {
	db.Run()
	server.Run()
}
