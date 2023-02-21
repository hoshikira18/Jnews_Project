import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Culture from "./pages/Culture";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-200 w-screen">
        <div className="container w-[1252px] bg-gray-300 m-auto">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/culture" element={<Culture />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;