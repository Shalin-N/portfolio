package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Skill represents a single skill with its associated documentation URL
type Skill struct {
	Name string
	URL  string
}

// SkillCategory represents a category of skills
type SkillCategory struct {
	Name   string
	Skills []Skill
}

// getSkillCategories returns the hardcoded skills data
// In a production app, this would typically fetch from a database
func getSkillCategories() []SkillCategory {
	return []SkillCategory{
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
}

// SkillsFragment renders the skills fragment with categorized skills
func SkillsFragment(c *gin.Context) {
	categories := getSkillCategories()
	c.HTML(http.StatusOK, "skills.html", gin.H{
		"categories": categories,
	})
}
