package todo

import "github.com/gin-gonic/gin"

func InitRoutes(ApiGroup *gin.RouterGroup) {
	router := ApiGroup.Group("todo")

	router.GET("/", GetAll)
	router.POST("/", Create)
	router.GET("/:id", Get)
	router.PATCH("/:id", Update)
	router.DELETE("/:id", Delete)
}
