package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// WelcomeFragment renders the welcome/home fragment
func WelcomeFragment(c *gin.Context) {
	c.HTML(http.StatusOK, "welcome.html", nil)
}
