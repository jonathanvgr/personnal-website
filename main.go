package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		fmt.Fprintf(c.Writer, "Hello World")
	})

	r.Run()
}
