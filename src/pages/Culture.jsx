import Footer from "../components/Footer";
import React from "react";

import ScrollTimeline from "../components/ScrollTimeline";
import ExpandCard from "../components/ExpandCard";
import Slider from "../components/Slider";
import BreadCrumb from "../components/BreadCrumb";
import CulturePart from "../components/CulturePart";
import Scrollbackbutton from "../components/Scrollbackbutton";
import "../javascripts/style.css";
export default function Culture() {
  return (
    <div className="h-[40000px] bg-white">
      <BreadCrumb />

      {/* <!-- Văn hóa --> */}
      <div id="1">
        <div className="h-[51.2px] relative ">
          <h1 className=" absolute hover:text-blue-600 top-3 left-7 font-bold text-lg">
            Văn Hóa
          </h1>
        </div>
        <CulturePart />
      </div>
      <div className="h-7"></div>
      {/* <!-- Am thuc  --> */}
      <div id="2">
        <div className="h-[49px] relative">
          <h1 className=" absolute hover:text-blue-600 top-2 left-7 font-bold text-lg">
            Ẩm thực
          </h1>
        </div>
        <ExpandCard />
      </div>
      {/* <!-- Trang phuc --> */}
      <div id="3" className="h-[700px] ">
        <div className="h-[49px] relative">
          <h1 className="  absolute hover:text-blue-600 top-3 left-7 font-bold text-lg">
            Trang Phục
          </h1>
        </div>
        <Slider />
      </div>

      {/* <!-- Lễ Hội  --> */}
      <div id="4" className="h-[1000px]">
        <div className="h-[60px] relative ">
          <h1 className="  absolute hover:text-blue-600 my-auto left-7 font-bold text-lg">
            Lễ Hội
          </h1>
        </div>
        <ScrollTimeline />
      </div>

      {/* <!-- .........................................................Footer ..............................................................--> */}

      <footer className="h-56 ">
        <Footer />
      </footer>
      <div className="h-96"></div>
      <Scrollbackbutton />
    </div>
  );
}
