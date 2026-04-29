# Aarav's 3D Scroll Portfolio

A modern, high-performance 3D developer portfolio built with React, Three.js, and React Three Fiber.

## Tech Stack
- **React (Vite)**
- **Three.js**
- **React Three Fiber**
- **React Three Drei** (for ScrollControls, Float, etc.)
- **Tailwind CSS** (for styling)
- **Framer Motion** (for UI animations)
- **Lucide React** (for icons)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Features
- **Smooth 3D Scroll**: Camera and objects move in sync with page scroll.
- **Modern Dark UI**: Sleek glassmorphism design with a professional color palette.
- **Responsive**: Mobile-friendly layout with fallbacks.
- **Performance Optimized**: Low-poly geometries and efficient rendering.

## Project Structure
- `src/components/Experience.jsx`: Main 3D scene logic.
- `src/components/Overlay.jsx`: Wrapper for HTML sections.
- `src/components/Hero.jsx`, `About.jsx`, etc.: Individual sections.
- `src/App.jsx`: Canvas configuration and scroll controls.
