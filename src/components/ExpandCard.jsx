import React from "react";
import expandcard from "../javascripts/expandcard.js";
import returncard from "../javascripts/returncard.js";
import { useTranslation } from "react-i18next";

// hover:w-[300px] hover:rounded-[15px] relative flex
// hover:w-[300px] hover:rounded-[15px] hover:brightness-100
// hover:ml-3 hover:bottom-[50%] hover:left-1 hover:rotate-0
function ExpandCard() {
  const { t } = useTranslation();
  return (
    <div className="background flex h-96 w-full items-center justify-center overflow-x-scroll bg-white dark:bg-gray-900 lg:overflow-hidden  ">
      <div className="invisible h-8 w-[1000px] pr-[350px] md:hidden">
        {" "}
        nothing here
      </div>
      <div className="card-1 ml-96 lg:ml-0" responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all duration-200 "
          style={{
            backgroundImage:
              "url(https://www.kyounoryouri.jp/upfile/r/new_xl_13912_34129.jpg?bustcache=1528856964)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0 z-20 ml-[47.5%] w-28 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title1")}
          </div>
          <p className="info absolute top-[55%] z-10  mx-[5%] hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title1_1")}
          </p>
          <div className="background absolute bottom-0 z-0 hidden h-[70%] w-full rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"></div>
        </div>
      </div>

      <div className="card-2 mx-4" responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all  duration-200"
          style={{
            backgroundImage:
              "url(https://sushi-kiwami.com/inc/page/index/img/header.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className=" absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0 z-20 ml-[47.5%] w-28 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title2")}
          </div>
          <p className="info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title2_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full rounded-[15px]
                        bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>

      <div className="card-5 mx-4 " responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all duration-200"
          style={{
            backgroundImage:
              "url(https://resources.matcha-jp.com/resize/720x2000/2022/01/14-120569.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0 z-20 ml-[47.5%] w-32 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title3")}
          </div>
          <p className="info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title3_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full
          rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>
      <div className="card-6 mx-4" responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all duration-200 "
          style={{
            backgroundImage:
              "url(https://www.showa-sangyo.co.jp/assets/images/enjoy/encyclopedia/01/img_menu_01.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0 z-20 ml-[47.5%] w-28 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title4")}
          </div>
          <p className="info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title4_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full
          rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>

      <div className="card-7 mx-4" responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all  duration-200"
          style={{
            backgroundImage:
              "url(https://www.trial-net.co.jp/mag/wp-content/uploads/2021/12/02-2-729x500.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0 z-20 ml-[47.5%] w-28 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title5")}
          </div>
          <p className=" info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title5_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full
          rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>
      <div className="card-8 mx-4" responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all duration-200"
          style={{
            backgroundImage:
              "url(https://www.kyounoryouri.jp/upfile/r/new_xl_1581987629_6509.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0  z-20 ml-[47.5%] w-32 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title6")}
          </div>
          <p className=" info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title6_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full
          rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>
      <div className="card-9 mx-4 block " responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all duration-200"
          style={{
            backgroundImage:
              "url(https://www.nissui.co.jp/recipe/img/r_00350_mv.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0 z-20 ml-[47.5%] w-32 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title7")}
          </div>
          <p className=" info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title7_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full
          rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>
      <div className="card-9 mx-4 block " responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all duration-200"
          style={{
            backgroundImage:
              "url(https://dol.ismcdn.jp/mwimgs/6/3/1320w/img_63ee9c47765f137e1489790da08bebc3297500.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0 z-20 ml-[47.5%] w-32 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title8")}
          </div>
          <p className=" info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title8_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full
          rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>
      <div className="invisible h-8 w-[1000px] pl-[20px] md:hidden">
        {" "}
        nothing here
      </div>
      <div className="card-3 mx-4 hidden" responsive>
        <div
          className="item relative h-80 w-20 rounded-[25px] brightness-75 transition-all  duration-200"
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64,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)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-30 h-full w-full"
            onMouseEnter={expandcard}
            onMouseLeave={returncard}
          ></div>
          <div className="item-text absolute inset-x-0 bottom-0  z-20 ml-[47.5%] w-32 origin-left -rotate-90 text-left text-lg font-bold text-white transition-all duration-200">
            {t("content_culture.hiep_title9")}
          </div>
          <p className=" info absolute top-[55%] left-[5%] z-10 hidden w-[284px] text-sm font-extralight text-white transition-all duration-200">
            {t("content_culture.hiep_title9_1")}
          </p>
          <div
            className="background absolute bottom-0 z-0 hidden h-[70%] w-full
          rounded-[15px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(55,26,26,0.95)] transition-all duration-200"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ExpandCard;
