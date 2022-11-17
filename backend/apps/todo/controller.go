package todo

import (
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/common"
)

func GetAll(c *gin.Context) {
	db := common.GetDB()
	var todos []Todo

	if err := db.Find(&todos).Error; err != nil {
		common.Send_API_Error(c, err)
		return
	}

	common.Send_API_Data(c, todos)
}

func Get(c *gin.Context) {
	db := common.GetDB()
	id := c.Param("id") // Get ID from URL
	var todo Todo

	// Get first entry in DB where (Todo DB ID == ID from URL)
	if err := db.First(&todo, id).Error; err != nil {
		common.Send_API_Error(c, err)
		return
	}

	common.Send_API_Data(c, todo)
}

func Create(c *gin.Context) {
	db := common.GetDB()
	var todo Todo

	// Check if JSON body data binds with Todo struct model
	if err := c.ShouldBindJSON(&todo); err != nil {
		common.Send_API_BadRequest(c, err)
		return
	}

	// Create entry in DB
	if err := db.Create(&todo).Error; err != nil {
		common.Send_API_Error(c, err)
		return
	}

	common.Send_API_Data(c, todo) // Return created todo
}

func Update(c *gin.Context) {
	db := common.GetDB()
	id := c.Param("id") // Get ID from URL
	var todo Todo

	// It is important to first fetch the entry in DB
	// and then bind body data to the fetched entry
	// It allows body data to overwrite entry data

	// Fetch todo in DB
	if err := db.Preload("Items").First(&todo, id).Error; err != nil {
		common.Send_API_Error(c, err)
		return
	}

	// Check if JSON body data binds with Todo struct model
	if err := c.ShouldBindJSON(&todo); err != nil {
		common.Send_API_BadRequest(c, err)
		return
	}

	if err := db.Save(&todo).Error; err != nil {
		common.Send_API_Error(c, err)
		return
	}

	common.Send_API_Data(c, todo)
}

func Delete(c *gin.Context) {
	db := common.GetDB()
	id := c.Param("id") // Get ID from URL

	// Permanently (with Unscoped) delete record from DB
	if err := db.Unscoped().Delete(&Todo{}, id).Error; err != nil {
		common.Send_API_Error(c, err)
		return
	}

	common.Send_API_Data(c, true)
}