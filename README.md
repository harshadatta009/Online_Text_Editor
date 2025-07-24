# Text Utils

A modern, responsive, feature‑rich rich‑text editor built with React and Bootstrap. Text Utils provides live editing, formatting, text‑manipulation utilities, autosave, export options, and theming—perfect for your frontend portfolio or as a standalone text‑processing tool.

[Live Demo ↗︎](https://online-text-editor-six.vercel.app/)

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

- **Rich Text Editing**

  - Bold, _italic_, <u>underline</u>
  - Unordered & ordered lists
  - Undo / Redo

- **Live ContentEditable Area**
  - In‑browser editable region powered by React Context (`EditorContext`)

### Text Utilities

- Convert text to **UPPERCASE**
- Convert text to **lowercase**
- Remove **extra spaces**
- **Copy** full content to clipboard
- **Clear** all text

### Toolbar & Shortcuts

- Floating **Formatting Toolbar** with:
  - Text formatting & utility actions
  - Real‑time notification feedback on action success/failure

### Document Management

- **Save as TXT** — download current content as a `.txt` file
- **Autosave & Draft Recovery** — content saved to local storage and reloaded on startup

### Information & Statistics

- **Word, character, and line count** (dynamic)
- **Live Preview** pane showing formatted output

### UI & Theme

- **Responsive**, **minimalist** layout (Bootstrap 5)
- **Light / Dark** theme toggle across Navbar, editor, preview, and footer
- **Navbar** — theme‑aware, modular, with quick‑access action buttons
- **Animated Footer** — live year, developer name, React icon, GitHub link; theme‑aware styling

### Notifications & Feedback

- Context‑driven toasts showing **success**, **info**, or **danger** messages

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/harshadatta009/Text-Utils.git
   cd Text-Utils
   ```
