import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// context
import { TippmixContextProvider } from "./context/TippmixContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TippmixContextProvider>
      <App />
    </TippmixContextProvider>
  </StrictMode>,
);
