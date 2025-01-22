.PHONY: install dev build preview clean up down

# Install dependencies
install:
	pnpm install

# Start development server
dev:
	pnpm run dev

# Build for production
build:
	pnpm run build

# Preview production build
preview:
	pnpm run preview

# Clean build artifacts and dependencies
clean:
	rm -rf dist/
	rm -rf node_modules/
	rm -rf .astro/

# Start the development environment
up:
	pnpm install
	pnpm run dev

# Stop the development environment and clean up
down:
	@echo "Stopping development server..."
	@-pkill -f "astro dev" || true
	@echo "Development server stopped"

# Default target
all: install dev 