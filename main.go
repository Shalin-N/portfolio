package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Load HTML templates
	router.LoadHTMLGlob("templates/*")

	// Serve static files
	router.Static("/static", "./static")

	// Routes
	router.GET("/", indexPage)
	router.GET("/home", homePage)

	router.Run(":8080")
}

func indexPage(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", nil)
}

func homePage(c *gin.Context) {
	c.HTML(http.StatusOK, "home.html", nil)
}
