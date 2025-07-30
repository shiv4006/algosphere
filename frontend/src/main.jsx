// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { DifficultyProvider, ThemeProvider } from './index.jsx'; // Assuming these are your context providers
import { store } from '../src/store/store.js'; // Adjust the path to your store

import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <DifficultyProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DifficultyProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);