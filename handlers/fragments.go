package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func WelcomeFragment(c *gin.Context) {
	c.HTML(http.StatusOK, "welcome.html", nil)
}

type TimelineItem struct {
	Year        string
	Title       string
	Description string
	Tags        []string
	Side        string // "left" or "right"
}

func TimelineFragment(c *gin.Context) {
	items := []TimelineItem{
		{Year: "2025", Title: "Project Title", Description: "Description of the project or milestone goes here.", Tags: []string{"Go", "HTMX"}, Side: "right"},
		{Year: "2024", Title: "Another Project", Description: "Another project description here.", Tags: []string{"React", "Node.js"}, Side: "left"},
		{Year: "2023", Title: "Earlier Work", Description: "Description of earlier work or achievement.", Tags: []string{"Python", "Django"}, Side: "right"},
		{Year: "2022", Title: "First Steps", Description: "Where it all began.", Tags: []string{"JavaScript"}, Side: "left"},
	}
	c.HTML(http.StatusOK, "timeline.html", gin.H{
		"items": items,
	})
}
