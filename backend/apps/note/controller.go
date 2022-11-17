package note

import (
	"github.com/gin-gonic/gin"
	"github.com/jonathanvgr/website/config"
	"github.com/jonathanvgr/website/senders"
)

func GetAll(c *gin.Context) {
	var notes []Note

	if err := config.DB.Find(&notes).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, notes)
}

func Get(c *gin.Context) {
	id := c.Param("id") // Get ID from URL
	var note Note

	// Get first entry in DB where (Note DB ID == ID from URL)
	if err := config.DB.First(&note, id).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, note)
}

func Create(c *gin.Context) {
	var note Note

	// Check if JSON body data binds with Note struct model
	if err := c.ShouldBindJSON(&note); err != nil {
		senders.JsonBadRequest(c, err)
		return
	}

	// Create entry in DB
	if err := config.DB.Create(&note).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, note) // Return created note
}

func Update(c *gin.Context) {
	id := c.Param("id") // Get ID from URL
	var note Note

	// It is important to first fetch the entry in DB
	// and then bind body data to the fetched entry
	// It allows body data to overwrite entry data

	// Fetch note in DB
	if err := config.DB.First(&note, id).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	// Check if JSON body data binds with Note struct model
	if err := c.ShouldBindJSON(&note); err != nil {
		senders.JsonBadRequest(c, err)
		return
	}

	// Save changes into DB
	if err := config.DB.Save(&note).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, note)
}

func Delete(c *gin.Context) {
	id := c.Param("id") // Get ID from URL

	// Permanently (with Unscoped) delete record from DB
	if err := config.DB.Unscoped().Delete(&Note{}, id).Error; err != nil {
		senders.JsonError(c, err)
		return
	}

	senders.JsonData(c, true)
}
