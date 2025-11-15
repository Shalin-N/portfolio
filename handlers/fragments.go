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
		{Year: "Present", Title: "MongoDB Migration", Description: "I am migrating Azure Cosmo DB infrastructure to on premise MongoDB infrastructure so that FNZ can meet Swedish financial data regulatory requirements", Tags: []string{"Azure Cosmo DB", "MongoDB"}, Side: "left"},
		{Year: "Present", Title: "Token Vault", Description: "I am building a secure token vault using Azure Key Vault and .NET Core to manage sensitive credentials and secrets for agentic workflows", Tags: []string{"Azure Key Vault", ".NET Core"}, Side: "right"},
		{Year: "2025", Title: "Agentic Framework", Description: "I worked with Microsoft Engineers to migrate FNZ's LangChain agentic framework to Semantic Kernel", Tags: []string{"Semantic Kernel", "MCP"}, Side: "left"},
		{Year: "2025", Title: "KiwiSaver/IRD Integration", Description: "I led a team working with the IRD to build the KiwiSaver proposition for FNZ's wealth management platform", Tags: []string{".NET Framework", "SQL Server"}, Side: "right"},
		{Year: "2025", Title: "GVC Calculation Engine", Description: "I built an engine to calculate the KiwiSaver goverment contributions owed to customers each year", Tags: []string{"C#", "SQL Server"}, Side: "left"},
		{Year: "2024", Title: "TDA Calculation Engine", Description: "I built an engine to calculate tax entitlements related to the onshore bonds investment accounts", Tags: []string{"C#", "SQL Server"}, Side: "right"},
		{Year: "2023", Title: "Migration Dashboard", Description: "I built a dashboard to monitor and manage data migrations for newly onboarded practices using Dentally", Tags: []string{"Ruby on Rails", "Ember.js"}, Side: "left"},
		{Year: "2023", Title: "Review Environments", Description: "I built a heuristic-based database seeding algorithm to populate data in review environments", Tags: []string{"Ruby on Rails"}, Side: "right"},
	}
	c.HTML(http.StatusOK, "timeline.html", gin.H{
		"items": items,
	})
}

type Skill struct {
	Name string
	URL  string
}

type SkillCategory struct {
	Name   string
	Skills []Skill
}

func SkillsFragment(c *gin.Context) {
	categories := []SkillCategory{
		{
			Name: "Languages",
			Skills: []Skill{
				{Name: "C#", URL: "https://learn.microsoft.com/en-us/dotnet/csharp/"},
				{Name: "T-SQL", URL: "https://learn.microsoft.com/en-us/sql/t-sql/language-reference"},
				{Name: "TypeScript", URL: "https://www.typescriptlang.org/"},
				{Name: "Go", URL: "https://go.dev/"},
				{Name: "Svelte", URL: "https://svelte.dev/"},
				{Name: "Ruby", URL: "https://www.ruby-lang.org/"},
				{Name: "React", URL: "https://react.dev/"},
				{Name: "Python", URL: "https://www.python.org/"},
				{Name: "R", URL: "https://www.r-project.org/"},
				{Name: "VB", URL: "https://learn.microsoft.com/en-us/dotnet/visual-basic/"},
			},
		},
		{
			Name: "Backend Development",
			Skills: []Skill{
				{Name: ".NET Core", URL: "https://dotnet.microsoft.com/"},
				{Name: ".NET Framework", URL: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet-framework"},
				{Name: "Go", URL: "https://go.dev/"},
				{Name: "Ruby on Rails", URL: "https://rubyonrails.org/"},
			},
		},
		{
			Name: "Frontend Development",
			Skills: []Skill{
				{Name: "React", URL: "https://react.dev/"},
				{Name: "SvelteKit", URL: "https://kit.svelte.dev/"},
				{Name: "HTMX", URL: "https://htmx.org/"},
				{Name: "Node.js", URL: "https://nodejs.org/"},
				{Name: "Ember.js", URL: "https://emberjs.com/"},
			},
		},
		{
			Name: "DevOps & Cloud",
			Skills: []Skill{
				{Name: "Azure Cloud Services", URL: "https://azure.microsoft.com/"},
				{Name: "Cloudflare", URL: "https://www.cloudflare.com/"},
				{Name: "GitHub Actions", URL: "https://github.com/features/actions"},
				{Name: "Docker", URL: "https://www.docker.com/"},
				{Name: "Kubernetes", URL: "https://kubernetes.io/"},
			},
		},
		{
			Name: "Databases",
			Skills: []Skill{
				{Name: "SQL Server", URL: "https://www.microsoft.com/en-us/sql-server"},
				{Name: "Azure Cosmo DB", URL: "https://azure.microsoft.com/en-us/products/cosmos-db"},
				{Name: "MongoDB", URL: "https://www.mongodb.com/"},
				{Name: "Azure Key Vault", URL: "https://azure.microsoft.com/en-us/products/key-vault"},
			},
		},
		{
			Name: "AI & Frameworks",
			Skills: []Skill{
				{Name: "Semantic Kernel", URL: "https://learn.microsoft.com/en-us/semantic-kernel/"},
				{Name: "Microsoft Agentic Framework", URL: "https://www.microsoft.com/en-us/research/project/autogen/"},
				{Name: "LangChain", URL: "https://www.langchain.com/"},
				{Name: "MCP", URL: "https://modelcontextprotocol.io/"},
				{Name: "A2A", URL: "https://github.com/microsoft/autogen"},
			},
		},
	}

	c.HTML(http.StatusOK, "skills.html", gin.H{
		"categories": categories,
	})
}
