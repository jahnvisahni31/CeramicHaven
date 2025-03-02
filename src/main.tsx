import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Polyfill for SplitText
window.SplitText = function(target: any, config: any) {
  this.chars = [];
  this.words = [];
  
  if (typeof target === 'string') {
    target = document.querySelector(target);
  }
  
  if (!target) return;
  
  const text = target.textContent;
  target.innerHTML = '';
  
  // Split by words
  const words = text.split(' ');
  this.words = words.map((word: string) => {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.textContent = word + ' ';
    target.appendChild(span);
    return span;
  });
  
  // Split by chars
  if (config.type.includes('chars')) {
    target.innerHTML = '';
    this.chars = text.split('').map((char: string) => {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.textContent = char === ' ' ? ' ' : char;
      target.appendChild(span);
      return span;
    });
  }
  
  return this;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);