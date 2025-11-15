package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// TimelineItem represents a single item in the project timeline
type TimelineItem struct {
	Year        string
	Title       string
	Description string
	Tags        []string
	Side        string // "left" or "right"
}

// getTimelineItems returns the hardcoded timeline data
// In a production app, this would typically fetch from a database
func getTimelineItems() []TimelineItem {
	return []TimelineItem{
		{Year: "Present", Title: "MongoDB Migration", Description: "I am migrating Azure Cosmo DB infrastructure to on premise MongoDB infrastructure so that FNZ can meet Swedish financial data regulatory requirements", Tags: []string{"Azure Cosmo DB", "MongoDB"}, Side: "left"},
		{Year: "Present", Title: "Token Vault", Description: "I am building a secure token vault using Azure Key Vault and .NET Core to manage sensitive credentials and secrets for agentic workflows", Tags: []string{"Azure Key Vault", ".NET Core"}, Side: "right"},
		{Year: "2025", Title: "Agentic Framework", Description: "I worked with Microsoft Engineers to migrate FNZ's LangChain agentic framework to Semantic Kernel", Tags: []string{"Semantic Kernel", "MCP"}, Side: "left"},
		{Year: "2025", Title: "KiwiSaver/IRD Integration", Description: "I led a team working with the IRD to build the KiwiSaver proposition for FNZ's wealth management platform", Tags: []string{".NET Framework", "SQL Server"}, Side: "right"},
		{Year: "2025", Title: "GVC Calculation Engine", Description: "I built an engine to calculate the KiwiSaver goverment contributions owed to customers each year", Tags: []string{"C#", "SQL Server"}, Side: "left"},
		{Year: "2024", Title: "TDA Calculation Engine", Description: "I built an engine to calculate tax entitlements related to the onshore bonds investment accounts", Tags: []string{"C#", "SQL Server"}, Side: "right"},
		{Year: "2023", Title: "Migration Dashboard", Description: "I built a dashboard to monitor and manage data migrations for newly onboarded practices using Dentally", Tags: []string{"Ruby on Rails", "Ember.js"}, Side: "left"},
		{Year: "2023", Title: "Review Environments", Description: "I built a heuristic-based database seeding algorithm to populate data in review environments", Tags: []string{"Ruby on Rails"}, Side: "right"},
	}
}

// TimelineFragment renders the timeline fragment with project history
func TimelineFragment(c *gin.Context) {
	items := getTimelineItems()
	c.HTML(http.StatusOK, "timeline.html", gin.H{
		"items": items,
	})
}
