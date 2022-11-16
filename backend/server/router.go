package server

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/apps/todo"
)

func setupRouter() *gin.Engine {
	router := gin.New()

	// Serve static file and redirect to index when no corresponding route is found
	router.Use(static.Serve("/", static.LocalFile("./frontend", true)))
	router.NoRoute(func(c *gin.Context) {
		c.Request.URL.Path = "/"
		router.HandleContext(c)
	})

	// API routes
	api := router.Group("api")
	todo.InitRoutes(api)

	return router
}
