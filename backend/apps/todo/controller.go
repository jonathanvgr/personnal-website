package todo

import (
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/common"
)

func GetAll(c *gin.Context) {
	var todos []Todo
	db := common.GetDB()

	if err := db.Find(&todos).Error; err != nil {
		common.Send_API_Error(c, err)
		return
	}

	common.Send_API_Data(c, todos)
}

func Get(c *gin.Context) {

}

func Create(c *gin.Context) {

}

func Update(c *gin.Context) {

}

func Delete(c *gin.Context) {

}
