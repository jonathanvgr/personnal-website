package senders

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func JsonData(c *gin.Context, data any) {
	c.JSON(http.StatusOK,
		gin.H{
			"data": data,
		})
}

func JsonError(c *gin.Context, err error) {
	c.JSON(http.StatusInternalServerError,
		gin.H{
			"error": err.Error(),
		})
}

func JsonBadRequest(c *gin.Context, err error) {
	c.JSON(http.StatusBadRequest,
		gin.H{
			"error": err.Error(),
		})
}
