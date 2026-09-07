# Auto-Werkstatt

A responsive website project for a small-to-medium local car workshop in Germany.

> **Portfolio/demo project:** `AutoWerk Musterstadt` is a fictional workshop used to demonstrate the structure and UX of a local automotive service website. It is not presented as a real customer reference.

The application is built as a modern React single-page application with TypeScript, client-side routing, reusable components, and styled-components.

## Features

- Home page for the workshop presentation
- Services overview
- About page
- FAQ page
- Contact page
- Legal notice (`Impressum`)
- Privacy policy (`Datenschutz`)
- Client-side navigation with React Router
- Responsive UI with reusable styled components
- Motion and interface transitions with Framer Motion

## Tech stack

- React 18
- TypeScript
- Vite
- React Router DOM
- styled-components
- Framer Motion

## What this project demonstrates

The project is intended as a portfolio example for local-service web development. It demonstrates how a workshop website can combine technical structure with practical business goals:

- clear service presentation for visitors who arrive with a specific repair need
- trust-building sections such as FAQ, company information and legal pages
- responsive layouts for customers searching from a phone
- reusable components that make service and content changes easier to maintain
- a structure that can later be connected to enquiry forms, analytics, local SEO and booking flows

## Getting started

### Prerequisites

Install a current LTS version of Node.js and npm.

### Installation

```bash
git clone https://github.com/Svitly4nyi-Vla2yslav/Auto-Werkstatt.git
cd Auto-Werkstatt
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
```

## Verification before deployment

The current production check is the build command:

```bash
npm run build
```

It runs the TypeScript project build first (`tsc -b`) and only creates the Vite production bundle if type checking succeeds. The repository does not currently define dedicated lint or automated test scripts, so those should be added before treating the project as production-hardened.

## Project structure

```text
src/
├── app/         # Application-level setup
├── assets/      # Static assets
├── components/  # Reusable UI components
├── data/        # Static project data
├── hooks/       # Custom React hooks
├── pages/       # Route-level pages
├── routes/      # Routing configuration
├── sections/    # Larger page sections
├── styles/      # Shared styling
└── types/       # TypeScript types
```

## Before production use

For a real workshop deployment, replace demo content with verified company data, connect the contact flow to a production backend/form provider, review cookie/consent requirements, validate `Impressum` and `Datenschutz`, and configure local SEO/analytics for the actual business location.

The demo `index.html` intentionally uses `noindex, nofollow` so the fictional workshop is not indexed as a real local business. Remove or replace that robots directive only when verified production company data and the final public URL are ready to be indexed.

## License

This project is licensed under the terms provided in the [LICENSE](LICENSE) file.
