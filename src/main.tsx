import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function clampMainBounds(val, min = 0, max = 100) {
  const num = Number(val);
  if (Number.isNaN(num)) return min;
  return Math.min(max, Math.max(min, num));
}
