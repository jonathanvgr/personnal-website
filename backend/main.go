package main

import (
	"github.com/jonathanvgr/website/common"
	"github.com/jonathanvgr/website/server"
)

func main() {
	common.InitDB()
	server.Run()
}
