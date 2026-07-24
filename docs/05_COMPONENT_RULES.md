# Cosmos BrandFlow — Component Rules

## 1. Purpose

This document defines the rules and standards for creating React components in the Cosmos BrandFlow project.

The goal is to maintain:

- Clean component architecture
- Reusable code
- Better maintainability
- Consistent UI development
- Scalable frontend structure

---

# 2. Component Philosophy

Every component should have:

- A clear purpose
- A single responsibility
- Reusable structure
- Clean implementation
- Proper TypeScript support

Components should be simple to understand and easy to modify.

---

# 3. Component Types

Components are divided into different categories.

---

## UI Components

Small reusable interface elements.

Examples:
Button.tsx
Card.tsx
Input.tsx
Badge.tsx


Used across multiple sections.

---

## Layout Components

Components responsible for common page structures.

Examples:Navbar.tsx
Footer.tsx
Container.tsx
SectionWrapper.tsx


---

## Section Components

Large website sections that combine multiple components.

Examples:


HeroSection.tsx
ServicesSection.tsx
PricingSection.tsx
AboutSection.tsx

---

# 4. Component Creation Rules

Before creating a component, check:

- Does this component already exist?
- Can an existing component be reused?
- Is the component solving a real problem?
- Will this improve the project structure?

Avoid creating unnecessary components.

---

# 5. Component Structure

A component should follow a clean structure.

Example:

```tsx
function HeroSection() {
  return (
    <section>
      Content
    </section>
  );
}

export default HeroSection;
Recommended structure:
ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts
└── index.ts


For example:


HeroSection/
├── HeroSection.tsx
├── HeroSection.types.ts
└── index.ts


For simple components, a single file is acceptable:


Button.tsx
Card.tsx
Navbar.tsx


The structure should depend on the complexity of the component.

Small components should remain simple, while larger components should have their own folder structure.