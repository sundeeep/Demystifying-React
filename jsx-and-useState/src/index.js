import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const realDOMRoot = document.getElementById('root');

const root = ReactDOM.createRoot(realDOMRoot);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
