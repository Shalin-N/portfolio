package main

import (
	"portfolio/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Load HTML templates from both subdirectories
	// To address later windows doesn't reliable work with the GLOB pattern
	router.LoadHTMLFiles(
		"templates/pages/index.html",
		"templates/fragments/welcome.html",
		"templates/fragments/timeline.html",
	)

	// Serve static files
	router.Static("/static", "./static")

	// Setup routes
	routes.SetupRoutes(router)

	router.Run(":8080")
}
