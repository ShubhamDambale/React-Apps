// src/App.js
import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dark/Light Theme Toggle</h1>
        <ThemeToggle />
      </header>
      <p>This is a simple dark/light theme toggle example in React with Vite.</p>
    </div>
  );
}

export default App;
