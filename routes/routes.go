package routes

import (
	"portfolio/handlers"

	"github.com/gin-gonic/gin"
)

// SetupRoutes configures all application routes
func SetupRoutes(router *gin.Engine) {
	// Page routes
	router.GET("/", handlers.IndexPage)

	// HTMX fragment routes
	router.GET("/home", handlers.HomeFragment)
}
