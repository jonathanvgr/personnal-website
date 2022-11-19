package server

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/apps/note"
)

func setupRouter() *gin.Engine {
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://thedarkunicorns.fr/", "http://www.thedarkunicorns.fr"}
	corsConfig.AllowWildcard = true
	router.Use(cors.New(corsConfig))

	// Serve static file and redirect to index when no corresponding route is found
	router.Use(static.Serve("/", static.LocalFile("./frontend", true)))
	router.NoRoute(func(c *gin.Context) {
		c.Request.URL.Path = "/"
		router.HandleContext(c)
	})

	// API routes
	api := router.Group("api")
	note.InitRoutes(api)

	return router
}
