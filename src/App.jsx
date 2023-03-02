import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import publicRoutes from "./route";

function App() {
  return (
    <BrowserRouter>
      <div className="root bg-gray-50 ">
        <div className="bg-gray-100 drop-shadow-sm dark:bg-gray-900">
          <Header />
        </div>
        <div className="bg-white dark:bg-gray-400 sm:w-full lg:m-auto lg:w-[1280px]">
          <Routes>
            {publicRoutes.map((route, index) => {
              return <Route path={route.path} element={<route.component />} />;
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
