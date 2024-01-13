// src/components/ThemeToggle.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const applyTheme = () => {
      document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    };

    applyTheme();
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
    </div>
  );
};

export default ThemeToggle;
