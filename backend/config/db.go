package config

import (
	"log"
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open(os.Getenv("DB")), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
}
