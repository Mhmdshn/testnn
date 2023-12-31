import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { App } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
