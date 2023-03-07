import Footer from "../components/Footer";
import React from "react";

import ScrollTimeline from "../components/ScrollTimeline";
import ExpandCard from "../components/ExpandCard";
import Slider from "../components/Slider";
import BreadCrumb from "../components/BreadCrumb";
import CulturePart from "../components/CulturePart";
import Scrollbackbutton from "../components/Scrollbackbutton";
import { useTranslation } from "react-i18next";

export default function Culture() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <BreadCrumb />

      {/* <!-- Phong tục--> */}
      <div id="phongtuc">
        <h1 className=" py-[9px] pl-7 text-2xl font-bold hover:text-blue-600  dark:text-gray-200">
          {t("content_culture.phongtuc")}
        </h1>

        <CulturePart />
      </div>
      <div className="h-7"></div>
      {/* <!-- Am thuc  --> */}
      <div id="amthuc" className="pt-11">
        <h1 className="  py-[9px]   pl-7 text-2xl font-bold hover:text-blue-600 dark:text-gray-200">
          {t("content_culture.amthuc")}
        </h1>

        <ExpandCard />
      </div>
      {/* <!-- Trang phuc --> */}
      <div id="trangphuc" className="h-[700px] pt-11 ">
        <h1 className="   py-[9px] pl-7 text-2xl font-bold hover:text-blue-600 dark:text-gray-200">
          {t("content_culture.trangphuc")}
        </h1>

        <Slider />
      </div>

      {/* <!-- Lễ Hội  --> */}
      <div id="lehoi" className=" pb-20">
        <h1 className="py-[9px]  pl-7 text-2xl font-bold  hover:text-blue-600 dark:text-gray-200">
          {t("content_culture.lehoi")}
        </h1>

        <ScrollTimeline />
      </div>

      {/* <!-- .........................................................Footer ..............................................................--> */}

      <Scrollbackbutton />
    </div>
  );
}
