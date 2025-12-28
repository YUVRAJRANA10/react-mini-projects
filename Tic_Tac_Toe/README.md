# 🎮 Tic Tac Toe - React

A classic Tic Tac Toe game built with React, featuring **time travel** functionality to revisit any previous move in the game!

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple)

## ✨ Features

- ✅ Two-player Tic Tac Toe (X vs O)
- ✅ Winner detection
- ✅ **Time Travel** - Jump back to any previous move
- ✅ Move history displayed as clickable buttons
- ✅ Shows whose turn it is (X or O)

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Tic_Tac_Toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` to play the game!

## 🎯 How to Play

1. **X always goes first** - Click any empty square to place your mark
2. **Take turns** - Players alternate between X and O
3. **Win the game** - Get 3 in a row (horizontal, vertical, or diagonal)
4. **Time Travel** - Use the buttons on the right to jump back to any previous move!

## 📁 Project Structure

```
Tic_Tac_Toe/
├── src/
│   ├── App.jsx        # Main game components (Square, App/Board, Game)
│   ├── App.css        # Game styles
│   ├── main.jsx       # React entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Dependencies
└── vite.config.js     # Vite configuration
```

## 🧩 Code Overview

| Component | Purpose |
|-----------|---------|
| `Square`  | Renders a single clickable button |
| `App`     | The game board - renders 9 squares and handles moves |
| `Game`    | Top-level component managing history and time travel |

## 📚 Learn More

This project follows the official [React Tic-Tac-Toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe).

## 🛠 Built With

- [React 19](https://react.dev/) - UI Library
- [Vite](https://vite.dev/) - Build Tool & Dev Server
