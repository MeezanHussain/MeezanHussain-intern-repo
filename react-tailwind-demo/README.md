# React + Tailwind CSS Demo

A modern React application built with Vite and styled with Tailwind CSS, demonstrating responsive design, dark mode support, and interactive components.

## Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd react-tailwind-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/` to see the application running.

## Setup Process

### Step 1: Create React Project with Vite
```bash
npx create-vite@latest react-tailwind-demo --template react --yes
cd react-tailwind-demo
npm install
```

### Step 2: Install Tailwind CSS Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```

### Step 3: Configure Tailwind CSS

**PostCSS Configuration (`postcss.config.js`):**
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

**Tailwind Configuration (`tailwind.config.js`):**
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

**CSS Setup (`src/index.css`):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Additional custom styles... */
```

### Step 4: Create Demo Components
The main `App.jsx` component demonstrates:
- Responsive design with Tailwind classes
- Dark mode support
- Interactive state management
- Modern UI components with hover effects
- Gradient backgrounds and shadows

## Features Demonstrated

### ✅ React Features
- **Component State Management**: Interactive counter with `useState`
- **Event Handling**: Button click handlers
- **Component Composition**: Clean, modular component structure

### ✅ Tailwind CSS Features
- **Responsive Design**: Mobile-first approach with responsive classes
- **Dark Mode**: Automatic dark mode support
- **Utility Classes**: Extensive use of Tailwind utility classes
- **Hover Effects**: Interactive hover states and transitions
- **Gradients & Shadows**: Modern visual effects
- **Typography**: Responsive text sizing and styling

### ✅ Vite Features
- **Fast Development Server**: Hot Module Replacement (HMR)
- **Modern Build Tool**: ES modules and optimized bundling
- **Development Experience**: Fast startup and rebuild times

## 📁 Project Structure

```
react-tailwind-demo/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles with Tailwind directives
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Tailwind Classes Used

### Layout & Spacing
- `min-h-screen` - Full viewport height
- `container mx-auto` - Centered container with max-width
- `px-4 py-8` - Padding utilities
- `space-x-8` - Horizontal spacing between children

### Colors & Backgrounds
- `bg-gradient-to-br from-blue-50 to-indigo-100` - Gradient background
- `dark:from-gray-900 dark:to-gray-800` - Dark mode gradients
- `bg-white dark:bg-gray-800` - Light/dark background colors

### Typography
- `text-5xl font-bold` - Large, bold text
- `text-gray-800 dark:text-white` - Text colors with dark mode

### Interactive Elements
- `hover:scale-110` - Scale on hover
- `transition-transform` - Smooth transitions
- `hover:bg-indigo-700` - Color change on hover
- `transform hover:-translate-y-1` - Lift effect on hover

### Responsive Design
- `max-w-2xl mx-auto` - Responsive max-width
- `rounded-2xl` - Large border radius
- `shadow-xl` - Large shadow

## 🔧 Troubleshooting

### Common Issues

1. **PostCSS Plugin Error**: Make sure you have `@tailwindcss/postcss` installed
2. **Tailwind Classes Not Working**: Verify Tailwind directives are in `index.css`
3. **Build Errors**: Check that all dependencies are installed with `npm install`

### Verification Steps

1. **Check Tailwind is Working**: Look for styled components in the browser
2. **Test Responsive Design**: Resize browser window
3. **Test Dark Mode**: Toggle system dark mode preference
4. **Test Interactivity**: Click the counter button

## Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

## Success Indicators

✅ **React is working** - Interactive counter updates on button click  
✅ **Tailwind CSS is working** - Beautiful, responsive styling applied  
✅ **Vite is working** - Fast development server with HMR  
✅ **Dark mode support** - Automatic theme switching  
✅ **Responsive design** - Works on all screen sizes  

---

**Project Status**: ✅ Complete and fully functional  
**Last Updated**: August 28, 2025  
**Demo URL**: http://localhost:5173/ (when running `npm run dev`)