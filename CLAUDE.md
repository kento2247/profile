# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website showcasing Kento Tokura's professional background and research work. It's built with vanilla HTML, CSS, and JavaScript/jQuery without any build process or package manager.

## Key Commands

Since this is a static site without build tools:
- **Run locally**: Open `index.html` directly in a browser or use a local server (e.g., `python -m http.server 8000` or VS Code Live Server)
- **Deploy**: Upload files directly to any static hosting service
- **No build/lint/test commands** - This is intentional as it's a pure static site

## Architecture and Structure

### File Organization
- `index.html` - Single page containing all sections
- `css/` - Stylesheets split into base, main, vendor, and fonts
- `js/` - JavaScript files including jQuery 2.1.3 and custom scripts
- `images/` - Profile photos and backgrounds
- `pdf/` - CV and research papers
- `fonts/` - Web fonts (Lora and Poppins families)

### Key Components

1. **Navigation System** (`js/main.js:89-150`)
   - Smooth scrolling between sections
   - Mobile-responsive menu toggle
   - Active section highlighting

2. **Neural Network Animation** (`js/network-canvas.js`)
   - Canvas-based particle animation in hero section
   - Creates visual network connections between nodes

3. **Timeline Components** (`index.html:283-565`)
   - Work experience and education sections use timeline layout
   - CSS animations trigger on scroll

4. **Skill Bars** (`js/main.js:227-241`)
   - Animated progress bars for technical skills
   - Triggered when scrolled into view

5. **Publications Grid** (`index.html:567-658`)
   - Academic papers displayed in responsive grid
   - Links to PDF versions

### Important Patterns

- **No JavaScript frameworks** - Uses jQuery for DOM manipulation
- **Progressive enhancement** - Site works without JavaScript
- **Mobile-first responsive design** - Breakpoints at 900px, 768px, 600px, 500px, 400px
- **Vendor prefixes included** - For older browser compatibility
- **Font loading** - Uses @font-face with multiple formats for compatibility

### Content Updates

When updating content:
- Profile information: Edit directly in `index.html`
- CV: Replace `pdf/cv.pdf`
- Publications: Add new entries to the publications section grid
- Skills: Update percentage values in skill bars
- Timeline: Add new timeline blocks following existing structure