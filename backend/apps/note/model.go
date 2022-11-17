package note

import "gorm.io/gorm"

type Note struct {
	gorm.Model
	Name  string `json:"Name" gorm:"not null"`
	Items string `json:"Items"`
}
