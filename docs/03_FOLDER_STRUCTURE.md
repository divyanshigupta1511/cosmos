# Cosmos BrandFlow — Folder Structure

## 1. Purpose

This document defines the recommended folder structure for the Cosmos BrandFlow project.

The goal is to maintain:

- Clean architecture
- Scalable development
- Easy navigation
- Reusable code
- Better project maintenance

A clear structure helps developers build new features faster while keeping the project organized.

---

# 2. Recommended Project Structure

The project should follow this structure:
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

# 3. Folder Responsibilities

## app/

Purpose:

Contains the Next.js application routing system.

Used for:

- Pages
- Layouts
- Route handling
- Global application setup

Examples:
app/
├── layout.tsx
├── page.tsx
└── globals.css

---

## components/

Purpose:

Contains reusable UI components used throughout the website.

Used for:

- Buttons
- Cards
- Navbar elements
- Forms
- Common UI blocks

Examples:
components/
├── Navbar.tsx
├── Button.tsx
├── Card.tsx
└── Footer.tsx


---

## sections/

Purpose:

Contains complete website sections.

Used for:

- Hero section
- Services section
- Pricing section
- About section
- Contact section

Examples:
sections/
├── HeroSection.tsx
├── ServicesSection.tsx
├── PricingSection.tsx
└── ContactSection.tsx


---

## animations/

Purpose:

Contains reusable animation logic.

Used for:

- Framer Motion variants
- Scroll animations
- Floating effects
- Interactive motion patterns

Examples:
animations/
├── fade.ts
├── slide.ts
└── variants.ts


---

## hooks/

Purpose:

Contains reusable React hooks.

Used for:

- Scroll tracking
- Mouse interactions
- Responsive logic
- Shared state logic

Examples:
hooks/
├── useScrollAnimation.ts
├── useMediaQuery.ts
└── useMousePosition.ts


---

## lib/

Purpose:

Contains reusable utility functions and application logic.

Used for:

- Helpers
- API functions
- Formatting utilities
- Shared logic

Examples:
ib/
├── utils.ts
└── constants.ts

---

## styles/

Purpose:

Contains global styling and design system files.

Used for:

- Global CSS
- Theme variables
- Custom styles
- Design tokens

---

## types/

Purpose:

Contains shared TypeScript definitions.

Used for:

- Component props
- Interfaces
- API response types
- Common data structures

Examples:
types/
├── components.ts
└── global.ts

---

## public/

Purpose:

Contains static assets.

Used for:

- Images
- Logos
- Icons
- Fonts
- Videos

Examples:
public/
├── images/
├── icons/
└── fonts/

---

## docs/

Purpose:

Contains project documentation.

Includes:

- Development guidelines
- Brand rules
- Architecture decisions
- Workflow documentation

---

# 4. Organization Rules

Follow these principles:

- Keep files close to their purpose.
- Avoid placing unrelated code together.
- Create reusable components.
- Maintain clear folder responsibilities.
- Keep naming consistent.

---

# 5. Component Placement Rules

Use:

`components/`

For reusable elements:

Examples:

- Button
- Navbar
- Card
- Modal

Use:

`sections/`

For complete website areas:

Examples:

- Hero
- Services
- Pricing
- Testimonials

---

# 6. Scalability Rules

The project structure should support future growth.

Future additions should follow the same principles:

- New features should have clear locations.
- Existing components should be reused.
- Large files should be divided.
- Structure should remain predictable.

---

# 7. Final Goal

The Cosmos BrandFlow architecture should remain:

- Clean
- Professional
- Scalable
- Easy to maintain
- Developer-friendly