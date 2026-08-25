# Auto-Werkstatt

A responsive website project for a small-to-medium local car workshop in Germany.

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

## License

This project is licensed under the terms provided in the [LICENSE](LICENSE) file.
