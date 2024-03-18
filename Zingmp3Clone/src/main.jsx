import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "../src/assets/css/style.css";
import { Provider } from "react-redux";
import { store } from "./stores/store.js";
import { Auth0Provider } from "@auth0/auth0-react";
const domain = import.meta.env.VITE_APP_AUTHO_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTHO_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>
);
