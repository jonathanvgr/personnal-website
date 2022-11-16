package todo

import "gorm.io/gorm"

type Todo struct {
	gorm.Model
	Name  string `json:"Name" gorm:"not null"`
	Items string `json:"Items"`
}
