import React from "react";
import Header from "../components/Header";
import "../App.css";

function Home() {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <div className="container w-[1252px] h-screen bg-gray-300 m-auto">
        <Header />
      </div>
    </div>
  );
}

export default Home;
