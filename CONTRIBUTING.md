# Contributing to WeOrganize.ai Website

Thank you for your interest in contributing! We welcome contributions from everyone.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone git@github.com:YOUR_USERNAME/website.git
   cd website
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Locally

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

### Code Style

- We use **TypeScript** for type safety
- We use **ESLint** for code linting
- We use **Tailwind CSS** for styling
- Follow existing patterns in the codebase

### Commit Messages

Write clear, concise commit messages:
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Keep the first line under 72 characters

Examples:
```
Add dark mode toggle to navigation
Fix contact form validation error
Update SEO meta tags for better indexing
```

## Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Test your changes** in multiple browsers
3. **Run linting** to ensure code quality: `npm run lint`
4. **Build the project** to catch any errors: `npm run build`
5. **Create a Pull Request** with a clear description

### PR Guidelines

- Keep PRs focused on a single change
- Include screenshots for UI changes
- Reference any related issues
- Ensure all checks pass

## Reporting Issues

### Bug Reports

When reporting bugs, please include:
- Steps to reproduce the issue
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable

### Feature Requests

For feature requests, please include:
- Clear description of the feature
- Use case / why it's needed
- Any mockups or examples

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow

## Questions?

Feel free to reach out:
- Email: [hr@weorganize.ai](mailto:hr@weorganize.ai)
- Create an issue for discussion

---

Thank you for contributing!
