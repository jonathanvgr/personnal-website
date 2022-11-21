package server

import (
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/apps/note"
)

func nextProxy(c *gin.Context) {
	remote, err := url.Parse("http://localhost:3000/")
	if err != nil {
		panic(err)
	}

	proxy := httputil.NewSingleHostReverseProxy(remote)

	proxy.Director = func(req *http.Request) {
		req.Header = c.Request.Header
		req.Host = remote.Host
		req.URL = c.Request.URL
		req.URL.Scheme = remote.Scheme
		req.URL.Host = remote.Host
	}

	proxy.ServeHTTP(c.Writer, c.Request)
}

func setupRouter() *gin.Engine {
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://thedarkunicorns.fr/", "http://www.thedarkunicorns.fr"}
	corsConfig.AllowWildcard = true
	router.Use(cors.New(corsConfig))

	router.NoRoute(nextProxy)

	// API routes
	api := router.Group("api")
	note.InitRoutes(api)

	return router
}
