# QuizApp

A simple and interactive web-based quiz application powered by Vite.

## Features

- Create and take multiple-choice quizzes.
- Dynamic question rendering and score tracking.
- Responsive design for both desktop and mobile.
- Easy to extend with your own question sets.

## Prerequisites

- Node.js v14 or higher
- npm v6 or higher

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Peglo98/QuizApp.git
   cd QuizApp
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Build for Production

To create an optimized production build:
```bash
npm run build
npm run preview
```

## Project Structure

```
.
├── index.html         # Main HTML file
├── src
│   ├── main.js        # Application entry point
│   ├── styles.css     # Stylesheet (or styles folder)
│   └── assets/        # Static assets (images, etc.)
├── .gitignore         # Files and folders to ignore in Git
├── eslint.config.js   # ESLint configuration for code linting
├── package.json       # Project metadata and npm scripts
├── vite.config.js     # Vite configuration
└── README.md          # This documentation file
```
