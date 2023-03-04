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
    <div className="h-[40000px] bg-white dark:bg-gray-900 ">
      <BreadCrumb />

      {/* <!-- Văn hóa --> */}
      <div id="vanhoa">
        <h1 className=" hover:text-blue-600 pl-7 font-bold text-2xl dark:text-gray-200  py-[9px]">
          Văn Hóa
        </h1>
        <CulturePart />
      </div>
      <div className="h-7"></div>
      {/* <!-- Am thuc  --> */}
      <div id="amthuc" className="pt-11">
        <h1 className="  hover:text-blue-600   pl-7 font-bold text-2xl dark:text-gray-200 py-[9px]">
          Ẩm thực
        </h1>

        <ExpandCard />
      </div>
      {/* <!-- Trang phuc --> */}
      <div id="trangphuc" className="h-[700px] pt-11 ">
        <h1 className="   hover:text-blue-600 pl-7 font-bold text-2xl dark:text-gray-200 py-[9px]">
          Trang Phục
        </h1>

        <Slider />
      </div>

      {/* <!-- Lễ Hội  --> */}
      <div id="lehoi" className="h-[1000px] ">
        <h1 className="   hover:text-blue-600  pl-7 font-bold text-2xl  dark:text-gray-200 py-[9px]">
          Lễ Hội
        </h1>

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
