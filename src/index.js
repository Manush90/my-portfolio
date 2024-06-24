import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Trova l'elemento root nel tuo HTML
const rootElement = document.getElementById("root");

// Crea il root di React 18
const root = ReactDOM.createRoot(rootElement);

// Renderizza l'applicazione
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
