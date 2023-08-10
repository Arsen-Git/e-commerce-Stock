import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";

import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="231028449675-hbf6g5i1j1o1ljniehjoggflcrchn3cf.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
