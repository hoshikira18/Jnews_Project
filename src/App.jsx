import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import publicRoutes from "./route";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="relative z-50 bg-gray-100 drop-shadow-sm dark:bg-gray-800">
          <Header />
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 sm:w-full lg:m-auto lg:w-[1280px]">
          <Routes>
            {publicRoutes.map((route, index) => {
              return <Route path={route.path} element={<route.component />} />;
            })}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
