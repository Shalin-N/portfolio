# Portfolio Site

A minimalist portfolio website built with Go featuring an interactive Matrix-style animated background.

## Technologies

- **Backend**: Go with Gin framework
- **Frontend**: HTMX, CSS, JavaScript
- **Animation**: Canvas API (Matrix digital rain effect)
- **Dev Tools**: Air for hot reload

## Prerequisites

- Go 1.16 or higher
- [Air](https://github.com/cosmtrek/air) for hot reload (install with `go install github.com/cosmtrek/air@latest`)


## Installation

1. Install dependencies:
```bash
go mod download
```

2. Run the server:
```bash
air
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

## Project Structure

```
portfolio/
├── main.go             # Application entry point
├── handlers/           # HTTP request handlers
│   ├── pages.go        # Full page handlers
│   └── fragments.go    # HTMX fragment handlers
├── routes/             # Route configuration
│   └── routes.go       # Route setup and mapping
├── templates/          # HTML templates
│   ├── pages/          # Full page templates
│   └── fragments/      # HTMX partial templates
├── static/             # Static assets
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript files
├── go.mod              # Go dependencies
└── .air.toml           # Hot reload configuration
```

## License

MIT
