// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Routes
import router from './pages/routes';
import { RouterProvider } from 'react-router';

// Global Styles
import './styles/index.css';
import './styles/global.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
