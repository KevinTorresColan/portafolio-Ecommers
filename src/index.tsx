import { CssBaseline, ThemeProvider } from "@mui/material";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShoppingCartProvider } from './Context';
import { lightTheme } from "./Theme/light-theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
);

reportWebVitals();
