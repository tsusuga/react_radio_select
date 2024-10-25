import { createRoot } from 'react-dom/client';
import React from 'react';

document.body.innerHTML = '<div id="app"></div>';

root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, World</h1>);
root.render(React.createElement('h1', {}, 'Hello, World'));