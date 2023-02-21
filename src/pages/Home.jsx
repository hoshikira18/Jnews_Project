import React from "react";
// import Header from "../components/Header";
import "../App.css";
import Scrollbackbutton from "../components/Scrollbackbutton";
import SliderAuto from "../javascripts/SliderAuto";
import SliderManual from "../javascripts/SliderManual";

function Home() {
  return (
    <div className="h-[40000px]">
      <Scrollbackbutton />
      <div class="MustWatch grid grid-cols-10 h-300px">
        <div className="mb-5 h-80% col-span-7">
          <SliderAuto />
        </div>
        <div>
          <h1 className="text-5xl text-white font-bold">Must Watch</h1>
        </div>
      </div>
      <SliderManual />
    </div>
  );
}

export default Home;
