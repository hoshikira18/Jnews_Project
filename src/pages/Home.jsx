import React from "react";
import "../App.css";
import Scrollbackbutton from "../components/Scrollbackbutton";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full">
      <div className="h-[1000px]"></div>
      <Footer />

      <Scrollbackbutton />
    </div>
  );
}

export default Home;
