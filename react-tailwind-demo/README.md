# React + Tailwind CSS Demo

A modern React application built with Tailwind CSS and Vite for fast development and optimal performance.

## Features

- **React 18** - Latest React features and hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool and dev server
- **PostCSS** - CSS processing with autoprefixer
- **Responsive Design** - Mobile-first approach with Tailwind's responsive utilities

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Create project directory and navigate to it:**
   ```bash
   mkdir react-tailwind-demo
   cd react-tailwind-demo
   ```

2. **Initialize npm project:**
   ```bash
   npm init -y
   ```

3. **Install React dependencies:**
   ```bash
   npm install react react-dom
   ```

4. **Install development dependencies:**
   ```bash
   npm install --save-dev @vitejs/plugin-react vite tailwindcss postcss autoprefixer
   ```

5. **Create configuration files:**

   **tailwind.config.js:**
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   **postcss.config.js:**
   ```javascript
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

   **vite.config.js:**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     server: {
       port: 3000,
       open: true
     }
   })
   ```

6. **Set up CSS with Tailwind directives:**
   
   Create `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. **Update package.json scripts:**
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

## Running the Project

### Development Mode
```bash
npm run dev
```
This will start the development server at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Adding Custom Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'custom-blue': '#1e40af',
    }
  }
}
```

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [PostCSS Documentation](https://postcss.org/)