package server

import (
	"github.com/jonathanvgr/website/apps/note"
	"github.com/jonathanvgr/website/config"
)

func Run() {
	// Init DB and make migrations before running server
	config.InitDB()
	config.DB.AutoMigrate(&note.Note{})

	r := setupRouter()
	r.Run()
}
