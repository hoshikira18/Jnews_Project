import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Culture from "./pages/Culture";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="root bg-gray-300">
        <div className="bg-white dark:bg-gray-400 lg:m-auto lg:w-[1280px]">
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
