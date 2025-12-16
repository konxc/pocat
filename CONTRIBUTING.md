# Contributing to Pocat Documentation

Thank you for your interest in contributing to Pocat documentation! This guide will help you get started.

## 🚀 Quick Start

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/pocat-docs.git
   cd pocat-docs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Documentation Structure

```
src/content/docs/
├── getting-started/     # Getting started guides
├── api/                # API documentation
├── downloaders/        # Downloader engine docs
├── examples/           # Code examples
├── development/        # Development guides
└── reference/          # Reference materials
```

## ✍️ Writing Guidelines

### Content Style
- Use clear, concise language
- Include practical examples
- Add code snippets where helpful
- Use proper markdown formatting

### File Naming
- Use kebab-case for file names
- Include `.md` extension
- Be descriptive but concise

### Frontmatter
Each documentation page should include frontmatter:

```yaml
---
title: Page Title
description: Brief description of the page content
---
```

## 🔧 Development

### Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |

### Adding New Pages

1. Create a new `.md` file in the appropriate directory
2. Add frontmatter with title and description
3. Update the sidebar in `astro.config.mjs` if needed
4. Test locally before submitting

## 🐛 Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📋 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the writing guidelines
   - Test your changes locally
   - Ensure all links work correctly

3. **Commit your changes**
   ```bash
   git commit -m "docs: add/update [description]"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Submit pull request**
   - Use a clear, descriptive title
   - Include summary of changes
   - Reference any related issues

## 🎯 Content Priorities

We especially welcome contributions in these areas:

- **API Examples**: Real-world usage examples
- **Integration Guides**: How to integrate with different frameworks
- **Troubleshooting**: Common issues and solutions
- **Performance Tips**: Optimization recommendations

## 📞 Getting Help

- **Issues**: [GitHub Issues](https://github.com/your-username/pocat-docs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/pocat-docs/discussions)

## 📄 License

By contributing to Pocat documentation, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make Pocat documentation better! 🎉
