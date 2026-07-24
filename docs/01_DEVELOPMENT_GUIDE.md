# Cosmos BrandFlow — Development Guide

## 1. Purpose

This document defines the development workflow and standards for building the Cosmos BrandFlow website.

The goal is to maintain a clean, scalable, and professional development process where every feature is created with performance, usability, and long-term maintenance in mind.

---

# 2. Development Approach

Every development task should follow this process:

1. Understand the requirement clearly.
2. Identify the files that need modification.
3. Plan the component structure.
4. Implement the feature using reusable code.
5. Test the functionality.
6. Review design consistency.
7. Optimize performance.
8. Document important changes.

---

# 3. Before Making Changes

Before modifying the project:

Always:

- Explain what will be changed.
- Mention affected file paths.
- Verify the existing project structure.
- Avoid unnecessary file changes.
- Preserve existing working code.

Never:

- Rewrite the entire project without requirement.
- Remove existing functionality without explanation.
- Introduce unnecessary dependencies.
---

# 4. Creating New Website Sections

Each major website section should have its own dedicated component.

Examples:
---

# 4. Creating New Website Sections

Each major website section should have its own dedicated component.

Examples:---

# 4. Creating New Website Sections

Each major website section should have its own dedicated component.

Examples:


components/
└── sections/
├── Hero.tsx
├── Services.tsx
├── Pricing.tsx
└── Contact.tsx 

Every section should:

- Have a clear purpose.
- Be responsive on all devices.
- Follow the Cosmos BrandFlow design system.
- Use reusable components wherever possible.
- Maintain clean and readable code structure.

Large sections should be divided into smaller reusable components whenever required.
---

# 5. Creating Components

Components should be created with scalability and reusability in mind.

Follow these rules:

- Keep components small and focused.
- Give every component one clear responsibility.
- Use meaningful names.
- Use TypeScript for props.
- Avoid unnecessary complexity.
- Keep styling consistent with the Cosmos design system.

A component should be easy to understand, modify, and reuse across different sections of the website.

Examples:

Good component names:
HeroSection.tsx
PricingCard.tsx
ServiceCard.tsx
Navbar.tsx
Button.tsx


Avoid unclear names:


Component1.tsx
NewFile.tsx
MainEverything.tsx

---

Components should follow this structure:
ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts
└── ComponentName.styles.ts


For simple components, a single file is acceptable:


Button.tsx
Card.tsx
Navbar.tsx

---

Before creating a new component, check:

- Does this component already exist?
- Can an existing component be reused?
- Is this component solving a clear problem?
- Will this improve project maintainability?

Avoid creating unnecessary components that make the project harder to manage.
---

# 6. File Organization Rules

The Cosmos BrandFlow project should follow a clean and scalable folder structure.

A proper file organization system helps maintain code quality, improves development speed, and makes future updates easier.

Recommended structure:
src/
├── app/
├── components/
├── sections/
├── animations/
├── hooks/
├── lib/
├── styles/
├── types/
├── public/
└── docs/

---

## app/

Responsible for:

- Application routes
- Pages
- Layouts
- Global application configuration

Examples:
app/
├── layout.tsx
├── page.tsx
└── globals.css

---

## components/

Contains reusable UI components.

Examples:

- Buttons
- Cards
- Navbar elements
- Form elements
- Common UI blocks

Example:
components/
├── Navbar.tsx
├── Button.tsx
└── Card.tsx

---

## sections/

Contains complete website sections.

Examples:

- Hero Section
- Services Section
- Pricing Section
- About Section
- Contact Section

Example:
sections/
├── HeroSection.tsx
├── ServicesSection.tsx
└── ContactSection.tsx

---

## animations/

Contains reusable animation logic.

Used for:

- Framer Motion variants
- Scroll animations
- Floating effects
- Interactive motion effects

---

## hooks/

Contains custom React hooks.

Examples:
hooks/
├── useScrollAnimation.ts
├── useMediaQuery.ts
└── useMousePosition.ts

---

## lib/

Contains shared utility functions and application logic.

Examples:

- Helper functions
- Formatters
- API utilities
- Common logic

---

## styles/

Contains global styling and design system files.

Examples:

- Global CSS
- Theme variables
- Custom styles

---

## types/

Contains TypeScript types and interfaces.

Examples:

- Component props
- API types
- Shared interfaces

---

## public/

Contains static assets.

Examples:

- Images
- Icons
- Fonts
- Logos
- Media files

---

## docs/

Contains project documentation.

Includes:

- Development rules
- Brand guidelines
- Design system
- Project workflow

---

# Organization Principles

Follow these rules:

- Keep files organized by responsibility.
- Avoid putting unrelated code together.
- Keep components reusable.
- Keep folder names clear and consistent.
- Prefer simple and predictable architecture.

The goal is to maintain a professional structure that can scale with the growth of Cosmos BrandFlow.
---

# 7. Naming Conventions

Consistent naming conventions help keep the project clean, readable, and easy to maintain.

All files, components, functions, and variables should follow clear naming patterns.

---

## React Components

React component files should use **PascalCase**.

Examples:
Navbar.tsx
HeroSection.tsx
ServiceCard.tsx
PricingCard.tsx
ContactForm.tsx

Avoid:
navbar.tsx
hero_section.tsx
component1.tsx

---

## Functions and Variables

Functions and variables should use **camelCase**.

Examples:
handleSubmit()
isVisible
userData
activeSection

Avoid:
HandleSubmit()
User_Data
Active_section
---

## Constants

Constants should use **UPPERCASE_WITH_UNDERSCORES**.

Examples:


API_URL
MAX_ITEMS
DEFAULT_THEME

---

## Custom Hooks

Custom React hooks should always start with **use**.

Examples:
useScrollAnimation()
useMediaQuery()
useMousePosition()
useTheme()


Avoid:


scrollAnimation()
mediaQuery()
---

## Folder Names

Folders should use lowercase naming.

Examples:


components/
sections/
hooks/
animations/
styles/


Avoid:


Components/
HeroSections/
MyFiles/

---

## File Naming Rules

Follow these guidelines:

- Use descriptive names.
- Avoid unclear abbreviations.
- Keep names consistent.
- Name files based on their purpose.

Good examples:


HeroSection.tsx
Footer.tsx
ButtonPrimary.tsx
useScrollReveal.ts


Bad examples:


New.tsx
Test.tsx
FinalVersion.tsx

---

# Naming Philosophy

Every name should clearly communicate its purpose.

A developer should understand what a file or component does just by reading its name.
---

# 8. Responsive Development Rules

Cosmos BrandFlow website should provide a premium experience across all screen sizes.

Every component and section must be designed for:

- Desktop
- Tablet
- Mobile

Responsive design is not an additional step. It should be considered during the initial development process.

---

# Design Approach

Follow a mobile-first approach whenever possible.

Every element should adapt properly:

- Layout structure
- Typography
- Spacing
- Images
- Buttons
- Navigation
- Animations

---

# Responsive Checklist

Before completing any section, verify:

## Desktop

Check:

- Proper spacing
- Large screen alignment
- Visual balance
- Animation performance

---

## Tablet

Check:

- Content wrapping
- Section spacing
- Image scaling
- Navigation behavior

---

## Mobile

Check:

- Text readability
- Button sizes
- Touch-friendly elements
- Smooth scrolling
- Animation performance

---

# Layout Rules

Maintain:

- Consistent spacing system
- Proper content width
- Flexible layouts
- Responsive typography

Avoid:

- Fixed widths that break on smaller screens
- Overflow issues
- Crowded layouts
- Unnecessary horizontal scrolling

---

# Animation Responsiveness

Animations should also adapt according to device performance.

Rules:

- Avoid heavy animations on mobile.
- Reduce complex effects when necessary.
- Maintain smooth transitions.
- Never compromise usability for visual effects.

---

# Final Goal

The website should feel like a premium experience on every device.

Mobile users should receive the same quality and attention as desktop users.
---

# 9. Debugging Workflow

When an issue occurs during development, follow a systematic debugging process.

The goal is to identify the real cause of the problem instead of applying random fixes.

---

# Debugging Process

Follow these steps:

## 1. Understand the Error

- Read the error message carefully.
- Identify what the error is describing.
- Note the affected file and line number.

---

## 2. Identify the Source

Check:

- Recently modified files.
- Component logic.
- Imports and exports.
- Dependencies.
- Styling conflicts.

---

## 3. Check Browser and Terminal Errors

Always review:

- Browser console errors.
- Next.js development server errors.
- TypeScript errors.
- Build warnings.

---

## 4. Apply the Smallest Fix

Follow these principles:

- Modify only required files.
- Avoid unnecessary code changes.
- Preserve existing working functionality.
- Test after every fix.

---

# Common Issues and Solutions

## Import Errors

Check:

- File path accuracy.
- Export names.
- Component names.

---

## Styling Issues

Check:

- Tailwind classes.
- CSS conflicts.
- Responsive breakpoints.
- Parent container styles.

---

## Animation Issues

Check:

- Framer Motion setup.
- Animation triggers.
- Performance impact.
- Component rendering behavior.

---

## TypeScript Errors

Check:

- Missing types.
- Incorrect props.
- Wrong variable types.
- Undefined values.

---

# Debugging Rules

Always:

- Understand the problem first.
- Make incremental changes.
- Test the solution.
- Document important fixes.

Never:

- Delete code without understanding.
- Change multiple unrelated files.
- Ignore warnings and errors.

---

# Final Goal

The debugging process should be predictable, efficient, and safe.

Every issue should be solved with the smallest possible change while maintaining code quality.
---

# 10. Testing Checklist

Before completing any feature or section, verify that everything works correctly.

Testing should be performed after every major implementation.

---

# Code Quality Checks

Verify:

- No TypeScript errors.
- No broken imports.
- No unused variables.
- No console errors.
- No unnecessary warnings.

---

# UI Testing

Check:

- Layout alignment.
- Spacing consistency.
- Typography hierarchy.
- Button appearance.
- Image positioning.
- Section structure.

The design should match the Cosmos BrandFlow visual identity.

---

# Responsive Testing

Test on:

- Desktop screens.
- Tablet screens.
- Mobile screens.

Verify:

- Content readability.
- Proper spacing.
- Navigation behavior.
- Button usability.
- Image scaling.
- Section responsiveness.

---

# Animation Testing

Verify:

- Animations run smoothly.
- Effects are not excessive.
- Scroll animations trigger correctly.
- Motion does not affect usability.
- Performance remains stable.

---

# Performance Testing

Check:

- Page loading speed.
- Image optimization.
- Bundle size impact.
- Animation performance.
- Overall user experience.

---

# Final Review Before Completion

Before marking a feature as complete:

- Review the changed files.
- Test the final result.
- Confirm design consistency.
- Confirm responsive behavior.
- Update documentation if required.

---

# Testing Philosophy

Testing is not only about finding errors.

It ensures that every part of Cosmos BrandFlow maintains:

- Quality
- Performance
- Reliability
- Premium user experience
---

# 11. Production Checklist

Before deploying the Cosmos BrandFlow website, complete the following checks.

The production version should be stable, optimized, and ready for real users.

---

# Build Verification

Check:

- Production build completes successfully.
- No TypeScript errors exist.
- No build warnings remain.
- All routes load correctly.

---

# Performance Optimization

Verify:

- Images are optimized.
- Assets load efficiently.
- Animations perform smoothly.
- Unnecessary dependencies are removed.
- Page loading speed is acceptable.

---

# SEO Verification

Check:

- Page titles are correct.
- Meta descriptions are added.
- Heading structure is proper.
- Images have meaningful alt text.
- URLs are search-friendly.

---

# User Experience Review

Verify:

- Navigation works correctly.
- Buttons and links function properly.
- Forms work correctly.
- Mobile experience is polished.
- Overall design feels consistent.

---

# Final Quality Check

Before deployment:

- Review every page.
- Test on multiple devices.
- Confirm brand consistency.
- Verify accessibility.
- Confirm production environment settings.

---

# Deployment Goal

The final website should represent Cosmos BrandFlow as a premium, reliable, and high-quality digital experience.
---

# 12. Related Documents

- [00_PROJECT_RULES.md](./00_PROJECT_RULES.md)
- [02_COLOR_SYSTEM.md](./02_COLOR_SYSTEM.md)
- [03_FOLDER_STRUCTURE.md](./03_FOLDER_STRUCTURE.md)
- [04_GIT_WORKFLOW.md](./04_GIT_WORKFLOW.md)
- [05_COMPONENT_RULES.md](./05_COMPONENT_RULES.md)
- [06_ANIMATION_GUIDE.md](./06_ANIMATION_GUIDE.md)
- [07_BRAND_GUIDELINES.md](./07_BRAND_GUIDELINES.md)
- [08_TODO.md](./08_TODO.md)

