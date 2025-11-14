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
├── main.go             # Main application server
├── templates/          # HTML templates and fragments
├── static/
│   ├── css/            # Stylesheets for Matrix theme
│   └── js/             # Matrix canvas animation scripts
├── go.mod              # Go dependencies
└── .air.toml           # Air config for hot reload
```

## License

MIT
