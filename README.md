<p align="center">
  <img src="public/logos/weorganize-full-logo.png" alt="WeOrganize.ai Logo" width="200"/>
</p>

<h1 align="center">WeOrganize.ai</h1>

<p align="center">
  <strong>Enterprise AI Consulting & Automation Solutions</strong>
</p>

<p align="center">
  <a href="https://www.weorganize.ai">
    <img src="https://img.shields.io/badge/Website-weorganize.ai-14b8a6?style=for-the-badge&logo=vercel&logoColor=white" alt="Website"/>
  </a>
  <a href="https://github.com/weorganize/website/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License"/>
  </a>
  <a href="https://github.com/weorganize/website">
    <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  </a>
</p>

<p align="center">
  <a href="https://www.weorganize.ai">View Live Site</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contact">Contact</a>
</p>

---

## About

WeOrganize.ai helps mid-market businesses transform with intelligent AI automation. Founded by Fortune 500 veterans with 16+ years of experience at ADP, AT&T, Barclays, and Bank of America.

**What we offer:**
- Free Proof of Concept to demonstrate value before commitment
- Enterprise-grade AI agents and automation workflows
- Fixed pricing with no hourly surprises
- Fast delivery: 4-8 weeks for most implementations

## Features

- **Modern Design** - Clean, responsive UI with dark mode support
- **SEO Optimized** - Comprehensive meta tags, structured data, and sitemaps
- **AEO/GEO Ready** - Optimized for AI search engines and voice assistants
- **Performance** - Lightning-fast load times with Vite and code splitting
- **Accessibility** - WCAG compliant with semantic HTML
- **Analytics** - Google Analytics integration

## Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React 18
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
      <br>Vite
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      <br>Tailwind
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=supabase" width="48" height="48" alt="Supabase" />
      <br>Supabase
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
      <br>Vercel
    </td>
  </tr>
</table>

**Additional Libraries:**
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Router](https://reactrouter.com/) - Client-side routing
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Lucide Icons](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone git@github.com:weorganize/website.git

# Navigate to project directory
cd website

# Install dependencies
npm install
# or
bun install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
weorganize-website/
├── public/                 # Static assets
│   ├── logos/             # Brand logos
│   ├── .well-known/       # Well-known URIs (llms.txt)
│   ├── sitemap.xml        # XML sitemap
│   └── robots.txt         # Robots file
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   └── layouts/      # Layout components
│   ├── pages/            # Page components
│   │   └── industries/   # Industry-specific pages
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── data/             # Static data files
│   └── integrations/     # Third-party integrations
├── supabase/             # Supabase edge functions
└── index.html            # HTML entry point with SEO
```

## Deployment

This project is deployed on **Vercel** with automatic deployments on push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/weorganize/website)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**WeOrganize.ai**

- Website: [www.weorganize.ai](https://www.weorganize.ai)
- Email: [hr@weorganize.ai](mailto:hr@weorganize.ai)
- LinkedIn: [WeOrganize AI](https://linkedin.com/company/weorganize-ai)

---

<p align="center">
  Made with ❤️ by the WeOrganize.ai Team
</p>
