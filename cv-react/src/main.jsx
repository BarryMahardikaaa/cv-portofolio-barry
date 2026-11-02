import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

/* Penanda bahwa JS aktif (dipakai CSS untuk hint "Klik untuk memperbesar") */
document.body.classList.add("js-on");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
