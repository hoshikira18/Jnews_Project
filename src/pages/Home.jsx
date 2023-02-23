import React from "react";
import Header from "../components/Header";
import "../App.css";
import Scrollbackbutton from "../components/Scrollbackbutton";
import Footer from "../components/Footer"
import Rankingboard from"../components/Rankingboard"

function Home() {
  return (
    <>
    <div className="h-[40000px] bg-white">
      <Rankingboard/>
      <Scrollbackbutton />
    </div>
    <Footer/>
    </>
  );
}

export default Home;
