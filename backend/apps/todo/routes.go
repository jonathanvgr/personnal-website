package todo

import "github.com/gin-gonic/gin"

func InitRoutes(ApiGroup *gin.RouterGroup) {
	group := ApiGroup.Group("todo")

	group.GET("/", GetAll)
	group.POST("/", Create)
	group.GET("/:id", Get)
	group.PATCH("/:id", Update)
	group.DELETE("/:id", Delete)
}
