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
        <div className="relative h-[51.2px] ">
          <h1 className=" absolute top-3 left-7 text-lg font-bold hover:text-blue-600">
            Văn Hóa
          </h1>
        </div>
        <CulturePart />
      </div>
      <div className="h-7"></div>
      {/* <!-- Am thuc  --> */}
      <div id="2">
        <div className="relative h-[49px]">
          <h1 className=" absolute top-2 left-7 text-lg font-bold hover:text-blue-600">
            Ẩm thực
          </h1>
        </div>
        <ExpandCard />
      </div>
      {/* <!-- Trang phuc --> */}
      <div id="3" className="h-[700px] ">
        <div className="relative h-[49px]">
          <h1 className="  absolute top-3 left-7 text-lg font-bold hover:text-blue-600">
            Trang Phục
          </h1>
        </div>
        <Slider />
      </div>

      {/* <!-- Lễ Hội  --> */}
      <div id="4" className="h-[1000px]">
        <div className="relative h-[60px] ">
          <h1 className="  absolute left-7 my-auto text-lg font-bold hover:text-blue-600">
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
