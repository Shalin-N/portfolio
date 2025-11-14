package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func HomeFragment(c *gin.Context) {
	c.HTML(http.StatusOK, "home.html", nil)
}
