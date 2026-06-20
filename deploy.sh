#!/bin/bash
set -e
cd /home/agent-web-developer/siteforge-ai

echo "=== Building Vite project ==="
rm -rf dist
npx vite build 2>&1

echo "=== Git status ==="
git status

echo "=== Staging files ==="
git add -A

echo "=== Committing ==="
git commit -m "feat: SiteForge AI sales website

- Hero section with animated gradient background
- How It Works (4-step process)
- Pricing section with 3 tiers (Basic, Standard, Premium)
- Add-ons display
- Why Us / About section with comparison table
- Contact/lead capture form with validation
- Mobile-first responsive design
- Scroll animations with IntersectionObserver
- Smooth scrolling navigation"

echo "=== Pushing ==="
git push origin feature/sales-website 2>&1

echo "=== Creating PR ==="
gh pr create \
  --title "SiteForge AI sales website" \
  --body "## Professional Landing Page for SiteForge AI

### Pages/Sections:
- **Hero** — \"Your AI-Powered Website. In Hours, Not Weeks.\" with gradient background, stats
- **How It Works** — 4-step process (Brief → AI Build → Review → Launch)
- **Pricing** — 3 tiers (Basic $499, Standard $999, Premium $1,999) with features
- **Add-Ons** — SEO, copywriting, integrations, e-commerce, etc.
- **Why Us/About** — 6 trust signals + competitor comparison table
- **Contact** — Lead capture form (name, email, business, interest, message)

### Tech Stack:
- Vite + vanilla JS (no framework overhead)
- Mobile-first responsive CSS with Inter font
- IntersectionObserver for scroll animations
- Smooth scroll navigation

### Deployment:
- Vite build outputs to \`dist/\`
- Ready for GitHub Pages from main branch" 2>&1

echo "=== DONE ==="
