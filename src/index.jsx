import React from 'react';
import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app');

  function App() {
    return (
      <div>
        <h1>Hello, World! and React.</h1>
      </div>
    );
  }

  console.log(rootElement);
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error('Root element not found');
  }

  // root.render(<App />);
});