import React from "react";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import Next from "../javascripts/Slider";
import { Back } from "../javascripts/Slider";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();
  return (
    <div className="slide relative overflow-x-scroll rounded pt-3 lg:overflow-hidden">
      <div className="dieuhuong flex text-6xl ">
        <div
          className="absolute top-1/2 z-50 hidden -translate-y-1/2 cursor-pointer
          bg-opacity-50 opacity-60 transition-all hover:scale-125 dark:text-white dark:hover:text-blue-700 lg:block "
          onClick={Back}
        >
          <AiOutlineDoubleLeft />
        </div>
        <div
          className="absolute right-0 top-1/2 z-50 hidden -translate-y-1/2 cursor-pointer 
          bg-opacity-50 opacity-60 transition-all hover:scale-125 dark:text-white dark:hover:text-blue-700 lg:block "
          onClick={Next}
        >
          <AiOutlineDoubleRight />
        </div>
      </div>
      <div className="chuyen-slide float-left flex w-[7000px] transition-all duration-500 ease-in md:w-[5008px] ">
        <div className=" relative flex h-[520px] w-[1252px] md:w-[1200px] lg:w-[1252px]">
          <div className=" hover:translate- absolute top-14 left-[10vw] sm:h-[350px] sm:w-[550px]">
            <img
              className="ele-1 border-x-rgba(220,206,197,0.5) h-full w-full rounded-[30px] border-r-2"
              src="https://s3.ap-southeast-1.amazonaws.com/we-xpats.com/uploads/article/5622/%E2%91%A2Guide_2020%2C4Q_34_3.jpg"
              alt=""
            />
          </div>
          <div className="ele-1 absolute bottom-10 right-[7vw] h-[400px] w-[500px] rounded-[30px] bg-[rgba(220,206,197,1)] md:h-[350px] md:w-[550px]">
            <h1 className="pt-4 pb-3 text-center text-2xl font-bold dark:text-white">
              {t("content_culture.trangphuc1")}
            </h1>
            <p className="ele-1 px-8 dark:text-white">
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp1_1")}
              </ul>
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp1_2")}
              </ul>
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp1_3")}
              </ul>
            </p>
          </div>
        </div>
        <div className=" relative flex h-[520px] w-[1200px] lg:w-[1252px]">
          <div className="ele-2 absolute top-14 right-[10vw] h-[350px] w-[550px] ">
            <img
              className="h-full w-full rounded-[30px] border-r-2 border-r-[rgba(211,65,117,0.5)]"
              src="https://studio-foret.jp/wp-content/uploads/2020/03/DSC_7583-e1592810518378.jpg"
              alt=""
            />
          </div>
          <div className="ele-2 absolute bottom-8 left-[10vw] h-[380px] w-[460px] rounded-[30px] bg-[rgb(214,89,133)] md:h-[300px]">
            <h1 className="pt-6 pb-3 text-center text-2xl font-bold dark:text-white">
              {t("content_culture.trangphuc2")}
            </h1>
            <p className="ele-2 px-8 dark:text-white">
              <ul className="mb-3 text-sm">
                {t("content_culture.content_tp2_1")}
              </ul>
              <ul className="mb-3 text-sm">
                {t("content_culture.content_tp2_2")}
              </ul>
              <ul className="mb-3 text-sm">
                {t("content_culture.content_tp2_3")}
              </ul>
            </p>
          </div>
        </div>
        <div className="relative flex h-[520px] w-[1200px] lg:w-[1252px]">
          <div className="ele-3 absolute top-12 left-[13vw] h-[400px] w-[400px] md:h-[350px] md:w-[550px] ">
            <img
              className=" h-full w-full rounded-[30px] border-r-2 border-x-[rgba(67,126,156,0.5)]"
              src="https://s3.ap-southeast-1.amazonaws.com/we-xpats.com/uploads/article/5622/%E2%91%A2Guide_2020%2C4Q_34_4.jpg?fbclid=IwAR0Dqwy4n53Dbx5s-ThY3gHp8rL1RZSaSGbKFxfWhlyHRVTRVqy_20uU1kQ"
              alt=""
            />
          </div>
          <div className="ele-3 absolute bottom-10 right-10 h-[350px] w-[550px] rounded-[30px] bg-[rgb(67,126,156)]">
            <h1 className="pt-4 pb-3 text-center text-2xl font-bold dark:text-white">
              {t("content_culture.trangphuc3")}
            </h1>
            <p className="ele-3 px-8 dark:text-white">
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp3_1")}
              </ul>
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp3_2")}
              </ul>
            </p>
          </div>
        </div>
        <div className=" relative flex h-[520px] w-[1200px] lg:w-[1252px]">
          <div className="ele-4 absolute top-14 right-20 h-[350px] w-[550px] ">
            <img
              className="h-full w-full rounded-[30px] border-r-2 border-x-[rgba(247,147,176,0.5)]"
              src=" https://tabiiro.jp/lpimg/leisure/206437/main/img1.jpg "
              alt=""
            />
          </div>
          <div className="ele-4 absolute bottom-6 left-48 h-[350px] w-[550px] rounded-[30px] bg-[rgb(247,147,176)]">
            <h1 className="pt-4 pb-3 text-center text-2xl font-bold dark:text-white">
              {t("content_culture.trangphuc4")}
            </h1>
            <p className=" ele-4 px-8 dark:text-white">
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp4_1")}
              </ul>
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp4_2")}
              </ul>
              <ul className="mb-1 text-sm">
                {t("content_culture.content_tp4_3")}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
