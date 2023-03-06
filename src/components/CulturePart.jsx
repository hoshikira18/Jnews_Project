import React from "react";
import { useTranslation } from "react-i18next";

export default function CulturePart() {
  const { t } = useTranslation();

  return (
    <div>
        <div className=" grid lg:h-[450px] h-auto w-full lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-3 ">
          <div className="bg-blue-200  relative">
            <div className="bottom-0 z-10 absolute lg:pl-2 pl-3 lg:pr-2 pr-3 lg:h-[100px] md:h-[110px] h-[190px] lg:text-base md:text-xl text-lg bg-gradient-to-t from-[rgba(5,4,17,0.5)] to-[rgba(7,7,21,0.4)] w-full  text-white">
              日本の伝統文化は、国内外問わず魅力的なコンテンツとして注目されています。日本の伝統文化を後世に残すには、多くの人が魅力や重要性に気づき、積極的に体験する必要があります。着物や和食、歌舞伎などは日本を代表する伝統文化です。
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
                  className=" h-[400px] md:h-[460px]  bg-center bg-cover hover:scale-110 transition-all duration-500 ease-in-out "
                ></div>
              </div>
            </a>
          </div>
          <div className="grid md:grid-rows-2 lg:gap-2 gap-3">
            <div className="bg-gray-900 ">
              <div className="bg-blue-200 w-full lg:h-auto md:h-[400px] h-[300px] relative">
                <div className=" bottom-0 z-10 absolute lg:pl-2 pl-4 lg:h-[50px] md:h-[65px] h-[100px] bg-gradient-to-t from-[rgba(10,4,47,0.5)] to-[rgba(26,26,59,0.4)] w-full lg:text-base md:text-xl text-lg  text-white">
                  静岡県の「河津桜」がきれいに咲いて大勢の人が楽しむ
                </div>
                <a className=''
                  href="https://omatsurijapan.com/blog/ohanami-yurai-rekishi/"
                  target={"_blank"}
                >
                  <div className="overflow-hidden ">
                    <div
                      style={{
                        backgroundImage: `url(https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/329718998_742863910782603_6493593314013067109_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8QmZTRrkQGkAX8zeCAP&_nc_ht=scontent.fhan15-1.fna&oh=03_AdRQgasEph1yMXOewwS-EvbRBNQ8soUA3qWnvRcwUcs64g&oe=64269C34)`,
                      }}
                      className=" lg:h-[225px] md:h-[400px] h-[300px] bg-cover hover:scale-110 transition-all duration-500 ease-in-out bg-no-repeat"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <div className="bg-gray-900">
                <div className="bg-blue-200 relative">
                  <div className="bottom-0 z-10 absolute pl-2  lg:h-[50px] md:h-[65px] h-[56px] bg-gradient-to-t from-[rgba(10,4,47,0.5)] to-[rgba(26,26,59,0.4)] w-full lg:text-base md:text-xl text-lg  text-white">
                    おもてなし日本の代表する文化
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
                        className=" lg:h-[225px] md:h-[400px] h-[300px] bg-center bg-cover hover:scale-110 transition-all duration-500 ease-in-out bg-no-repeat"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-gray-900">
                <div className="bg-blue-200 relative">
                  <div className=" bottom-0 z-10 absolute pl-2 lg:h-[50px] md:h-[65px] h-[70px] bg-gradient-to-t from-[rgba(10,4,47,0.5)] to-[rgba(26,26,59,0.4)] w-full lg:text-base md:text-xl text-lg text-white">
                    独自のクリスマス
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
                        className=" lg:h-[225px] md:h-[400px] h-[300px] bg-center bg-cover hover:scale-110 transition-all duration-500 ease-in-out bg-no-repeat"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid lg:h-[450px] h-auto w-full lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-3 mt-4">
          <div className="grid md:grid-rows-2 gap-2 ">
            <div className="bg-blue-900 ">
              <div className="bg-blue-200 relative">
                <div className=" bottom-0 z-10 absolute lg:pl-2 pl-4 lg:h-[80px] md:h-[100px] h-[135px] bg-gradient-to-t from-[rgba(10,4,47,0.5)] to-[rgba(26,26,59,0.4)] w-full lg:text-base md:text-xl text-lg  text-white">
                  <h1 className='lg:text-xl md:text-2xl text-3xl'>神社仏閣</h1>
                  <p>
                    神社や寺院は日本らしさを感じられる建造物です。神社には、日本特有の宗教である神道の神様が祀られています。
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
                      className=" lg:h-[230px] md:h-[410px] h-[340px] bg-center bg-cover hover:scale-110 transition-all duration-500 ease-in-out bg-no-repeat"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="bg-gray-900">
                <div className="bg-gray-900 relative">
                  <div className=" bottom-0 z-10 absolute pl-2  lg:h-[80px] md:h-[100px] h-[115px] bg-gradient-to-t from-[rgba(10,4,47,0.5)] to-[rgba(26,26,59,0.4)] w-full lg:text-base md:text-xl text-lg text-white">
                    <h1 className='lg:text-xl md:text-2xl text-3xl'>温泉</h1>
                    <p>温泉とは、地下から湧き出した温水のことです。</p>
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
                        className=" lg:h-[230px] md:h-[410px] h-[320px] bg-center bg-cover hover:scale-110 transition-all duration-500 ease-in-out bg-no-repeat"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-gray-900">
                <div className="bg-blue-200 relative">
                  <div className="bottom-0 z-10 absolute lg:pl-2 pl-4 lg:h-[80px] md:h-[100px] h-[115px] bg-gradient-to-t from-[rgba(10,4,47,0.5)] to-[rgba(26,26,59,0.4)] w-full lg:text-base md:text-xl text-lg  text-white">
                    <h1 className='lg:text-xl md:text-2xl text-2xl'>書道</h1>
                    <p>書道は茶道や華道に並ぶ日本の伝統三道の一つです</p>
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
                        className="  lg:h-[230px] md:h-[410px] h-[320px] bg-center bg-cover hover:scale-110 transition-all duration-500 ease-in-out bg-no-repeat"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 ">
            <div className="bg-blue-200 relative">
              <div className=" bottom-0 z-10 absolute lg:pl-2 pl-3 lg:pr-2 pr-3 lg:h-[100px] md:h-[135px] h-[175px] lg:text-base md:text-xl text-lg bg-gradient-to-t from-[rgba(10,4,47,0.5)] to-[rgba(26,26,59,0.4)] w-full  text-white">
                <h1 className='lg:text-xl md:text-2xl text-2xl'>日本食</h1>
                <p>
                  海外で人気の日本食はお寿司や天ぷら、すき焼きなどです。また、日本の伝統的な懐石料理や郷土料理も海外で人気があります。日本食は、日本独特の味付けや盛りつけが魅力です.
                </p>
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
                    className="  h-[360px] md:h-[470px] bg-center bg-cover hover:scale-110 transition-all duration-500 ease-in-out bg-no-repeat"
                  ></div>
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}