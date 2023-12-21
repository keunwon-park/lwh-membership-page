import React from "react";
import ReactDOM from "react-dom/client";

import "./reset.css.ts";
import MainPage from "./app/page.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
