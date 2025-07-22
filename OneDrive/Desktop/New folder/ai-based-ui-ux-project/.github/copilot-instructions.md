# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is an AI-based UI/UX project built with Next.js 15, TypeScript, and Tailwind CSS. The project uses the App Router architecture and includes modern development tools like ESLint.

## Development Guidelines

### Code Style
- Use TypeScript for all new components and utilities
- Follow React functional component patterns with hooks
- Use Tailwind CSS for styling - prefer utility classes over custom CSS
- Use semantic HTML elements for accessibility
- Implement responsive design patterns

### File Structure
- Components should be placed in `src/components/`
- Pages use the App Router in `src/app/`
- Utilities and helpers in `src/lib/`
- Types and interfaces in `src/types/`

### AI/UX Best Practices
- Focus on user experience and intuitive interfaces
- Implement accessible design patterns
- Consider loading states and error handling
- Use semantic markup for screen readers
- Follow WCAG guidelines for accessibility

### Performance
- Use Next.js Image component for optimized images
- Implement proper code splitting
- Use React.lazy() for component lazy loading
- Optimize bundle size with dynamic imports
