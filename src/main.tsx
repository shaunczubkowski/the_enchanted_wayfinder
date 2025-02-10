import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Chapter1 from "./Chapter1/Chapter1.tsx";
import Chapter1Puzzle from "./Chapter1/Chapter1Puzzle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="chapter1" element={<Chapter1 />} />
        <Route path="chapter1/puzzle" element={<Chapter1Puzzle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
