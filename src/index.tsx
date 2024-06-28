import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { L10nContext } from "./utils/L10nContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    // Change this value as per the requirement
    <L10nContext.Provider value="de">
      <App />
    </L10nContext.Provider>
  </React.StrictMode>
);
