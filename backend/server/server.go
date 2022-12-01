package server

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/apps/note"
	"github.com/jonathanvgr/website/config"
)

func Run() {
	// Init DB and make migrations before running server
	config.InitDB()
	config.DB.AutoMigrate(&note.Note{})

	if os.Getenv("PRODUCTION") == "1" {
		gin.SetMode(gin.ReleaseMode)
	}

	r := setupRouter()
	r.Run()
}
