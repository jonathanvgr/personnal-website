package server

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/apps/note"
)

func setupRouter() *gin.Engine {
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{
		"http://thedarkunicorns.fr/",
		"http://www.thedarkunicorns.fr/",
	}
	corsConfig.AllowWildcard = true
	router.Use(cors.New(corsConfig))

	// API routes
	note.InitRoutes(router)

	return router
}
