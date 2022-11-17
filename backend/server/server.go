package server

import (
	"github.com/jonathanvgr/website/apps/todo"
	"github.com/jonathanvgr/website/config"
)

func Run() {
	config.InitDB()
	config.DB.AutoMigrate(&todo.Todo{})

	r := setupRouter()
	r.Run()
}
