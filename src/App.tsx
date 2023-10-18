// App.tsx
'use client';
import React, { useState } from 'react';
import './App.css';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        <ul>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
        </ul>
      </div>

      <div className={`content ${isSidebarOpen ? 'content-shift' : ''}`}>
        {/* Your content goes here */}
      </div>
    </div>
  );
}

