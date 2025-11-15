package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Tag represents a tag with its associated documentation URL
type Tag struct {
	Name string
	URL  string
}

// TimelineItem represents a single item in the project timeline
type TimelineItem struct {
	Year        string
	Title       string
	Description string
	Tags        []Tag
	Side        string // "left" or "right"
}

// getTimelineItems returns the hardcoded timeline data
// In a production app, this would typically fetch from a database
func getTimelineItems() []TimelineItem {
	return []TimelineItem{
		{
			Year:        "Present",
			Title:       "MongoDB Migration",
			Description: "I am migrating Azure Cosmo DB infrastructure to on premise MongoDB infrastructure so that FNZ can meet Swedish financial data regulatory requirements",
			Tags: []Tag{
				{Name: "Azure Cosmo DB", URL: "https://azure.microsoft.com/en-us/products/cosmos-db"},
				{Name: "MongoDB", URL: "https://www.mongodb.com/"},
			},
			Side: "left",
		},
		{
			Year:        "Present",
			Title:       "Token Vault",
			Description: "I am building a secure token vault using Azure Key Vault and .NET Core to manage sensitive credentials and secrets for agentic workflows",
			Tags: []Tag{
				{Name: "Azure Key Vault", URL: "https://azure.microsoft.com/en-us/products/key-vault"},
				{Name: ".NET Core", URL: "https://dotnet.microsoft.com/"},
			},
			Side: "right",
		},
		{
			Year:        "2025",
			Title:       "Agentic Framework",
			Description: "I worked with Microsoft Engineers to migrate FNZ's LangChain agentic framework to Semantic Kernel",
			Tags: []Tag{
				{Name: "Semantic Kernel", URL: "https://learn.microsoft.com/en-us/semantic-kernel/"},
				{Name: "MCP", URL: "https://modelcontextprotocol.io/"},
			},
			Side: "left",
		},
		{
			Year:        "2025",
			Title:       "KiwiSaver/IRD Integration",
			Description: "I led a team working with the IRD to build the KiwiSaver proposition for FNZ's wealth management platform",
			Tags: []Tag{
				{Name: ".NET Framework", URL: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet-framework"},
				{Name: "SQL Server", URL: "https://www.microsoft.com/en-us/sql-server"},
			},
			Side: "right",
		},
		{
			Year:        "2025",
			Title:       "GVC Calculation Engine",
			Description: "I built an engine to calculate the KiwiSaver goverment contributions owed to customers each year",
			Tags: []Tag{
				{Name: "C#", URL: "https://learn.microsoft.com/en-us/dotnet/csharp/"},
				{Name: "SQL Server", URL: "https://www.microsoft.com/en-us/sql-server"},
			},
			Side: "left",
		},
		{
			Year:        "2024",
			Title:       "TDA Calculation Engine",
			Description: "I built an engine to calculate tax entitlements related to the onshore bonds investment accounts",
			Tags: []Tag{
				{Name: "C#", URL: "https://learn.microsoft.com/en-us/dotnet/csharp/"},
				{Name: "SQL Server", URL: "https://www.microsoft.com/en-us/sql-server"},
			},
			Side: "right",
		},
		{
			Year:        "2023",
			Title:       "Migration Dashboard",
			Description: "I built a dashboard to monitor and manage data migrations for newly onboarded practices using Dentally",
			Tags: []Tag{
				{Name: "Ruby on Rails", URL: "https://rubyonrails.org/"},
				{Name: "Ember.js", URL: "https://emberjs.com/"},
			},
			Side: "left",
		},
		{
			Year:        "2023",
			Title:       "Review Environments",
			Description: "I built a heuristic-based database seeding algorithm to populate data in review environments",
			Tags: []Tag{
				{Name: "Ruby on Rails", URL: "https://rubyonrails.org/"},
			},
			Side: "right",
		},
	}
}

// TimelineFragment renders the timeline fragment with project history
func TimelineFragment(c *gin.Context) {
	items := getTimelineItems()
	c.HTML(http.StatusOK, "timeline.html", gin.H{
		"items": items,
	})
}
