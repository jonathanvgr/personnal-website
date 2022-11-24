package note

import "github.com/gin-gonic/gin"

func InitRoutes(ApiGroup *gin.Engine) {
	r := ApiGroup.Group("note")

	r.GET("/", GetAll)
	r.POST("/", Create)
	r.GET("/:id", Get)
	r.PATCH("/:id", Update)
	r.DELETE("/:id", Delete)
}
