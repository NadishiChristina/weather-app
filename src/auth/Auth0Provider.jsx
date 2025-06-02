import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

// Integrates Auth0 for secure login, logout, and token handling

const Auth0ProviderWithHistory = ({ children }) => {

  // Fetch Auth0 app credentials from .env file
  const domain = import.meta.env.VITE_AUTH0_DOMAIN; 
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId) {
    throw new Error('Auth0 domain and client ID must be provided');
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,                      // request an access token for the protected API
        scope: "openid profile email"            // grants permissions for basic user data
      }}
      cacheLocation="localstorage"               // store tokens
      useRefreshTokens={true}                    // token renewal - to avoid logging out on token expiry
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;