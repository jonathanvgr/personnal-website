package config

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open("db.sql"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
}
