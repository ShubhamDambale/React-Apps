// src/App.js
import React from 'react';
import DataFetcher from './components/DataFetcher';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className='header'>Movie App</h1>
      <DataFetcher />
    </div>
  );
}

export default App;
