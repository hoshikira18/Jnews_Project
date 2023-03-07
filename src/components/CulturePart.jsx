import React from "react";
import { useTranslation } from "react-i18next";
export default function CulturePart() {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" grid h-auto w-full grid-cols-1 gap-3 lg:h-[450px] lg:grid-cols-2 lg:gap-2 ">
        <div className="relative  bg-blue-200">
          <div className="absolute bottom-0 z-10 h-[50px] w-full truncate bg-gradient-to-t from-[rgba(20,10,87,0.5)] to-[rgba(96,96,138,0.2)] pl-3 pr-3 text-xl text-white md:h-[110px] md:text-xl lg:h-[50px] lg:pl-2 lg:pr-2  lg:text-base">
            {t("content_culture.title1")}
          </div>
          <a
            href="https://we-xpats.com/ja/guide/as/jp/detail/6517/"
            target={"_blank"}
          >
            <div className="overflow-hidden ">
              <div
                style={{
                  backgroundImage: `url(https://www.narita-airport.jp/img/original/13365)`,
                }}
                className=" h-[660px] bg-cover  bg-center transition-all duration-500 ease-in-out hover:scale-110 md:h-[460px] "
              ></div>
            </div>
          </a>
        </div>
        <div className="grid grid-rows-2 gap-3 lg:gap-2">
          <div className="bg-gray-900 ">
            <div className="relative h-[600px] w-full bg-blue-200 md:h-[400px] lg:h-auto">
              <div className="absolute bottom-0 z-10 h-[50px] w-full truncate bg-gradient-to-t from-[rgba(164,13,126,0.5)] to-[rgba(240,191,224,0.2)] pl-4 text-xl text-white md:h-[65px] md:text-xl lg:h-[50px] lg:pl-2  lg:text-base">
                {t("content_culture.title2")}
              </div>
              <a
                className=""
                href="https://omatsurijapan.com/blog/ohanami-yurai-rekishi/"
                target={"_blank"}
              >
                <div className="overflow-hidden ">
                  <div
                    style={{
                      backgroundImage: `url(https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/329718998_742863910782603_6493593314013067109_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8QmZTRrkQGkAX8zeCAP&_nc_ht=scontent.fhan15-1.fna&oh=03_AdRQgasEph1yMXOewwS-EvbRBNQ8soUA3qWnvRcwUcs64g&oe=64269C34)`,
                    }}
                    className=" h-[600px] bg-cover bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 md:h-[400px] lg:h-[225px]"
                  ></div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-900">
              <div className="relative bg-blue-200">
                <div className="absolute bottom-0 z-10 h-[50px] w-full  truncate bg-gradient-to-t from-[rgba(20,10,87,0.5)] to-[rgba(96,96,138,0.2)] pl-2 text-xl text-white md:h-[65px] md:text-xl lg:h-[50px]  lg:text-base">
                  {t("content_culture.title3")}
                </div>
                <a
                  href=" https://thegate12.com/jp/article/422"
                  target={"_blank"}
                >
                  <div className="overflow-hidden ">
                    <div
                      style={{
                        backgroundImage: `url(https://scontent.xx.fbcdn.net/v/t1.15752-9/334398743_518562790349660_2967199420150780862_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=u_8Zam90zQ4AX_laT63&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTbJ2OOREJFgFkpaPx8KsFil08mbFCQ2GvzTv9WF9XU7A&oe=6425B1E9)`,
                      }}
                      className=" h-[600px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 md:h-[400px] lg:h-[225px]"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-900">
              <div className="relative bg-blue-200">
                <div className="absolute bottom-0 z-10 h-[50px] w-full truncate bg-gradient-to-t from-[rgba(20,10,87,0.5)] to-[rgba(96,96,138,0.2)] pl-2 text-xl text-white md:h-[65px] md:text-xl lg:h-[50px] lg:text-base">
                  {t("content_culture.title4")}
                </div>
                <a
                  href="https://yufuan.net/theater/?id=5334 "
                  target={"_blank"}
                >
                  <div className="overflow-hidden ">
                    <div
                      style={{
                        backgroundImage: `url(https://scontent.xx.fbcdn.net/v/t1.15752-9/329771287_154665310746542_3871439563415423560_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7OIoM_6TxMwAX_XIHnx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQcE1l39XR7JE_ufil1egFZT4ov3UUNkGXcpb0W4oKSpw&oe=6425B242)`,
                      }}
                      className=" h-[600px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 md:h-[400px] lg:h-[225px]"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-4 grid h-auto w-full grid-cols-1 gap-3 lg:h-[450px] lg:grid-cols-2 lg:gap-2">
        <div className="grid grid-rows-2 gap-3 lg:gap-2 ">
          <div className="bg-blue-50 ">
            <div className="relative bg-blue-200">
              <div className=" absolute bottom-0 z-10 h-[80px] w-full  bg-gradient-to-t from-[rgba(20,10,87,0.5)] to-[rgba(96,96,138,0.2)] pl-4 text-xl text-white md:h-[50px] md:text-xl lg:h-[50px] lg:pl-2  lg:text-base">
                <h1 className="truncate text-3xl md:text-2xl lg:text-xl">
                  {t("content_culture.title5")}
                </h1>
                <p className="w-[90%] truncate">
                  {t("content_culture.title5_1")}
                </p>
              </div>
              <a
                href="https://maido-bob.osaka/2020/08/17/shrines-and-temples/"
                target={"_blank"}
              >
                <div className="overflow-hidden ">
                  <div
                    style={{
                      backgroundImage: `url(https://readyfor.jp/s3/readyfor-img/project_photos/13349/medium/faf2abb14ad2fa54665825f9f50e5a66b746c2cf.jpg?1501390035)`,
                    }}
                    className=" h-[620px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 md:h-[410px] lg:h-[230px]"
                  ></div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-200">
              <div className="relative bg-blue-200">
                <div className=" md:h-[100px]lg:h-[80px] absolute bottom-0 z-10 h-[80px] w-full bg-gradient-to-t from-[rgba(20,10,87,0.5)] to-[rgba(96,96,138,0.2)] pl-4 text-white lg:pl-2">
                  <h1 className="text-3xl md:text-2xl lg:text-xl">
                    {t("content_culture.title6")}{" "}
                  </h1>
                  <p className="truncate">{t("content_culture.title6_1")} 。</p>
                </div>
                <a
                  href="https://www.jalan.net/news/article/578322/"
                  target={"_blank"}
                >
                  <div className="overflow-hidden ">
                    <div
                      style={{
                        backgroundImage: `url(https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/4/7/6/2/8/1/201808140216/on1s.jpg)`,
                      }}
                      className=" h-[620px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 md:h-[410px] lg:h-[230px]"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-blue-400">
              <div className="relative bg-blue-200">
                <div className="absolute bottom-0 z-10 h-[80px] w-full bg-gradient-to-t from-[rgba(20,10,87,0.5)] to-[rgba(96,96,138,0.2)] pl-4 text-white md:h-[100px] md:text-xl lg:h-[80px] lg:pl-2  lg:text-base">
                  <h1 className="text-3xl md:text-2xl lg:text-xl">
                    {t("content_culture.title7")}
                  </h1>
                  <p className="truncate">{t("content_culture.title7_1")}</p>
                </div>
                <a
                  href="https://haa.athuman.com/media/japanese/culture/1818/#:~:text=%E6%9B%B8%E9%81%93%E3%81%A8%E3%81%AF%E3%80%81%E3%80%8C%E6%AF%9B%E7%AD%86%E3%80%8D,%E3%81%A7%E3%81%82%E3%82%8B%E3%81%A8%E3%82%82%E3%81%84%E3%81%88%E3%81%BE%E3%81%99%E3%80%82"
                  target={"_blank"}
                >
                  <div className="overflow-hidden ">
                    <div
                      style={{
                        backgroundImage: `url(https://haa.athuman.com/media/japanese/wp-content/uploads/sites/4/2020/02/dfd76aa43123976fdc6d967e93e2604f.jpg)`,
                      }}
                      className="  h-[620px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 md:h-[410px] lg:h-[230px]"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 ">
          <div className="relative bg-blue-200">
            <div className=" absolute bottom-0 z-10 h-[80px] w-full bg-gradient-to-t from-[rgba(20,10,87,0.5)] to-[rgba(96,96,138,0.2)] pl-3 pr-3 text-white md:h-[135px] md:text-xl lg:h-[80px] lg:pl-2 lg:pr-2  lg:text-base">
              <h1 className="text-3xl md:text-2xl lg:text-xl">
                {t("content_culture.title8")}
              </h1>
              <p className="truncate">{t("content_culture.title8_1")}.</p>
            </div>
            <a
              href="https://www.meiji.co.jp/meiji-shokuiku/japaneseculture/washoku/"
              target={"_blank"}
            >
              <div className="overflow-hidden ">
                <div
                  style={{
                    backgroundImage: `url(https://jtsvn.com/wp-content/uploads/2021/10/japanese-meal-g76b0ca39f_640.jpg)`,
                  }}
                  className="  h-[660px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110 md:h-[470px]"
                ></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
