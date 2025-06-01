import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Auth0ProviderWithHistory from './auth/Auth0Provider.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </StrictMode>,
);