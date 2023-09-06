import React from "react";
import Home from "./pages/home";
import Easy from "./pages/easy";
import Intermediate from "./pages/intermediate";
import Hard from "./pages/hard";
import { Routes, Route } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/easy" element={<Easy />} />
      <Route path="/pages/intermediate" element={<Intermediate />} />
      <Route path="/pages/hard" element={<Hard />} />
    </Routes>
  );
}

export default App;

