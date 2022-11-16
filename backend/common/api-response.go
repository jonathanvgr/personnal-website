package common

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Send_API_Data(c *gin.Context, data any) {
	c.JSON(http.StatusOK,
		gin.H{
			"data": data,
		})
}

func Send_API_Error(c *gin.Context, err error) {
	c.JSON(http.StatusInternalServerError,
		gin.H{
			"error": err,
		})
}

func Send_API_BadRequest(c *gin.Context, err error) {
	c.JSON(http.StatusBadRequest,
		gin.H{
			"error": err,
		})
}
