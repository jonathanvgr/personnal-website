package server

import (
	"net/http"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	router := gin.New()

	// Serve static file and redirect to index when no corresponding route is found
	router.Use(static.Serve("/", static.LocalFile("./client", true)))
	router.NoRoute(func(c *gin.Context) {
		c.Request.URL.Path = "/"
		router.HandleContext(c)
	})

	// API routes
	api := router.Group("api")
	{
		// To Do's
		todoGroup := api.Group("todo")
		{
			todoGroup.GET("/", func(c *gin.Context) {
				c.JSON(http.StatusOK, gin.H{
					"data": "todo",
				})
			})
		}

	}

	return router
}
