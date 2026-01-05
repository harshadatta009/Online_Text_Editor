# Text Utils

Text Utils is a modern, responsive plain-text editor built with React and Bootstrap. It provides fast editing, text utilities, autosave, export, theming, and a safe live preview.

[Live Demo](https://online-text-editor-six.vercel.app/)

---

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Available Scripts](#available-scripts)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Technologies](#technologies)
7. [Author](#author)
8. [License](#license)

---

## Features

### Editor Core

- Plain-text editor with undo/redo
- Safe live preview (no HTML rendering)

### Text Utilities

- Convert text to **UPPERCASE**
- Convert text to **lowercase**
- Remove **extra spaces**
- **Copy** full content to clipboard
- **Clear** all text

### Document Management

- **Save as TXT** - download current content as a `.txt` file
- **Autosave & Draft Recovery** - content saved to local storage and reloaded on startup

### Information & Statistics

- **Word, character, and line count** (dynamic)

### UI & Theme

- **Responsive** layout (Bootstrap 5)
- **Light / Dark** theme toggle across Navbar, editor, preview, and footer
- Theme-aware navbar and footer

### Notifications & Feedback

- Toasts showing **success**, **info**, or **danger** messages

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/harshadatta009/Text-Utils.git
   cd Text-Utils
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

---

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite

---

## Usage

1. Type or paste text into the editor.
2. Use the toolbar to transform, copy, or clear your text.
3. Download a `.txt` file using the download button.

---

## Project Structure

```
src/
  components/   # UI components (Editor, Toolbar, Navbar, Footer)
  context/      # Theme and editor state
  hooks/        # Autosave hook
  styles/       # Global styles
  utils/        # Storage, stats, export helpers
```

---

## Technologies

- React 18
- Create React App
- Bootstrap 5
- React-Bootstrap
- Bootstrap Icons

---

## Author

Harsha Datta

---

## License

MIT
