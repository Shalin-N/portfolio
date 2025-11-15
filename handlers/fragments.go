package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func WelcomeFragment(c *gin.Context) {
	c.HTML(http.StatusOK, "welcome.html", nil)
}

func TimelineFragment(c *gin.Context) {
	c.HTML(http.StatusOK, "timeline.html", nil)
}
