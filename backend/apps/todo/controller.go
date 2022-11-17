package todo

import (
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/config"
	"github.com/jonathanvgr/website/senders"
)

func GetAll(c *gin.Context) {
	var todos []Todo

	if err := config.DB.Find(&todos).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, todos)
}

func Get(c *gin.Context) {
	id := c.Param("id") // Get ID from URL
	var todo Todo

	// Get first entry in DB where (Todo DB ID == ID from URL)
	if err := config.DB.First(&todo, id).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, todo)
}

func Create(c *gin.Context) {
	var todo Todo

	// Check if JSON body data binds with Todo struct model
	if err := c.ShouldBindJSON(&todo); err != nil {
		senders.JsonBadRequest(c, err)
		return
	}

	// Create entry in DB
	if err := config.DB.Create(&todo).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, todo) // Return created todo
}

func Update(c *gin.Context) {
	id := c.Param("id") // Get ID from URL
	var todo Todo

	// It is important to first fetch the entry in DB
	// and then bind body data to the fetched entry
	// It allows body data to overwrite entry data

	// Fetch todo in DB
	if err := config.DB.Preload("Items").First(&todo, id).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	// Check if JSON body data binds with Todo struct model
	if err := c.ShouldBindJSON(&todo); err != nil {
		senders.JsonBadRequest(c, err)
		return
	}

	if err := config.DB.Save(&todo).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, todo)
}

func Delete(c *gin.Context) {
	id := c.Param("id") // Get ID from URL

	// Permanently (with Unscoped) delete record from DB
	if err := config.DB.Unscoped().Delete(&Todo{}, id).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, true)
}
