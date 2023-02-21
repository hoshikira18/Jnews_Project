import React from "react";
import { MdAirplanemodeActive } from "react-icons/md";
import toggleText1 from "../javascripts/ScrollTimeline";
import {toggleText2} from "../javascripts/ScrollTimeline";
import {toggleText3} from "../javascripts/ScrollTimeline";
import {toggleText4} from "../javascripts/ScrollTimeline";

export default function div() {
  return (
    <div >
      <div className="w-full h-[5px] bg-pink-500 flex relative ">
        <button
          className=" left-[50px] absolute -top-10 text-2xl hover:text-blue-600  "
          onClick={toggleText1}
        >
          <p className=" mb-3 text-sm font-bold">1920</p>
          <MdAirplanemodeActive />
        </button>
        <button
          className=" left-[200px] absolute -top-10 text-2xl hover:text-blue-600   "
          onClick={toggleText2}
        >
          <p className=" mb-3 text-sm font-bold">1920</p>
          <MdAirplanemodeActive />
        </button>
        <button
          className=" left-[400px] absolute -top-10 text-2xl hover:text-blue-600  "
          onClick={toggleText3}
        >
          <p className=" mb-3 text-sm font-bold">1920</p>
          <MdAirplanemodeActive />
        </button>
        <button
          className=" left-[800px] absolute -top-10 text-2xl hover:text-blue-600  "
          onClick={toggleText4}
        >
          <p className=" mb-3 text-sm font-bold">1920</p>
          <MdAirplanemodeActive />
        </button>
      </div>
      <div className="h-10"></div>
      <div className="text1 underline">
        <h1>Tôi test máy bay 1</h1>
      </div>
      <div className="text2 hidden underline">
        <h1>Tôi test máy bay 2 </h1>
      </div>
      <div className="text3 hidden underline">
        <h1>Tôi test máy bay 3 </h1>
      </div>
      <div className="text4 hidden underline">
        <h1>Tôi test máy bay 4 </h1>
      </div>
    </div>
  );
}

