import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Culture from "./pages/Culture";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
