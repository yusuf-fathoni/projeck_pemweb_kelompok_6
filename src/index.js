// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css'; // Import global CSS
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'; // ✅ tambahkan ini

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>           {/* ✅ Bungkus dengan AuthProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);