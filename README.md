# Jiva Health Dashboard

A modern, responsive user management dashboard built with React and Vite.

## Features

- **User Profiles**: Detailed view of user information including stats, recent activities, and payment history.
- **Responsive Design**: Fully responsive layout that works across desktop and mobile devices.
- **Modern UI**: Clean and intuitive interface featuring custom components and smooth interactions.

## Tech Stack

This project is built using modern web technologies:

- **[React 19](https://react.dev/)**: For building the user interface.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast builds and hot module replacement.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid and maintainable styling.
- **[React Router DOM](https://reactrouter.com/)**: For client-side routing and navigation.
- **[Lucide React](https://lucide.dev/)**: Beautiful and consistent icon set.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd JivaHealth
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be output to the `dist` directory. To preview the production build locally:

```bash
npm run preview
```

## Project Structure

The project follows a component-based architecture. Key directories include:

- `src/components/`: Reusable UI components organized by feature (e.g., `users/`).
- `src/assets/`: Static assets like images and global styles.

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the app into static files for production.
- `npm run lint`: Runs ESLint to find and fix code style issues.
- `npm run preview`: Bootstraps a local static web server that serves the files from the `dist` folder.
