import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Chapter1 from "./Chapter1/Chapter1.tsx";
import Chapter1Puzzle from "./Chapter1/Chapter1Puzzle.tsx";
import Chapter1PostPuzzle from "./Chapter1/Chapter1PostPuzzle.tsx";
import Chapter2 from "./Chapter2/Chapter2.tsx";
import Chapter2Puzzle from "./Chapter2/Chapter2Puzzle.tsx";
import Chapter2PostPuzzle from "./Chapter2/Chapter2PuzzlePost.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="chapter1" element={<Chapter1 />} />
        <Route path="chapter1/puzzle" element={<Chapter1Puzzle />} />
        <Route path="chapter1/puzzle/post" element={<Chapter1PostPuzzle />} />
        <Route path="chapter2" element={<Chapter2 />} />
        <Route path="chapter2/puzzle" element={<Chapter2Puzzle />} />
        <Route path="chapter2/puzzle/post" element={<Chapter2PostPuzzle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
