import React from "react";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import Next from "../javascripts/Slider";
import { Back } from "../javascripts/Slider";

export default function () {
  return (
    <div className="slide rounded overflow-hidden relative  ">
      <div className="dieuhuong text-6xl flex ">
        <div
          className="absolute  top-1/2 -translate-y-1/2 cursor-pointer dark:text-white hover:text-blue-700   bg-slate-300 bg-opacity-50 hover:bg-opacity-70   dark:hover:text-blue-700 "
          onClick={Back}
        >
          <AiOutlineDoubleLeft />
        </div>
        <div
          className="right-0 absolute top-1/2  -translate-y-1/2 cursor-pointer dark:text-white  hover:text-blue-700 dark:hover:text-blue-700 bg-slate-300 bg-opacity-50 hover:bg-opacity-70 "
          onClick={Next}
        >
          <AiOutlineDoubleRight />
        </div>
      </div>
      <div className="chuyen-slide w-[7000px] float-left flex transition-all ease-in duration-500 ">
        <div className=" border-y-[1px] border-gray-500 flex bg-white  dark:bg-gray-800 w-[1252px] h-[520px]">
          <div className="w-3/5">
            <img
              className="w-full h-full border-r-2 border-x-slate-600"
              src="https://s3.ap-southeast-1.amazonaws.com/we-xpats.com/uploads/article/5622/%E2%91%A2Guide_2020%2C4Q_34_3.jpg"
              alt=""
            />
          </div>
          <div className="w-2/5 ">
            <h1 className="text-center dark:text-white font-bold text-2xl pt-6 pb-3   ">
              浴衣
            </h1>

            <p className="pl-8 pr-20 dark:text-white">
              <ul>
                浴衣とは、夏に着用する薄手の着物です。昔は、入浴後に着用する部屋着であり、寝巻きとしても身に着けられていました。現在は、花火大会や夏祭りに浴衣を着用します。
              </ul>
              <ul className="">
                街着にはならないが、夕方の散歩着としては着用する。浴衣は肌襦袢（はだじゅばん）を用いず素肌に着て、素足下駄ばきとし、草履（ぞうり）は履かない。女子は半幅帯を締め、普通の着物よりやや短めに着る。男子は兵児帯（へこおび）を締める。足袋（たび）は履かない。
                浴衣地は主として平織白木綿に藍（あい）染めをする。地白に藍、または地藍に白で紋様を出して染める。白木綿は、栃木県真岡（もおか）で織られていた真岡木綿を用いていたが、明治以降、三河地方（愛知県）で織られた岡木綿に押され、近年では岡木綿が浴衣地に用いられている。
              </ul>
              <ul className="">
                浴衣の柄は中形（ちゅうがた）を用い、浸染（しんせん）により藍染めをする。これを中形浴衣といい、普通に浴衣というときはこれをさす。
              </ul>
            </p>
          </div>
        </div>

        <div className=" border-y-[1px] border-gray-5 flex bg-white  dark:bg-gray-800 w-[1252px] h-[520px]">
          <div className="w-3/5">
            <img
              className="w-full h-full border-r-2 border-x-slate-600"
              src="https://s3.ap-southeast-1.amazonaws.com/we-xpats.com/uploads/article/5622/%E2%91%A2Guide_2020%2C4Q_34_4.jpg"
              alt=""
            />
          </div>
          <div className="w-2/5">
            <h1 className="text-center dark:text-white font-bold text-2xl pt-6 pb-3 ">
              甚平
            </h1>

            <p className="pl-8 pr-20 dark:text-white">
              <ul>
                甚平とは、男性や子どもが着用する和装の室内着です。主に、夏に着用するため、半袖半ズボン仕様になっています。また、通気性の良い綿や麻の素材が使われているのも特徴です。現在は、縁日や花火大会で着用されています。
              </ul>
              <ul>
                単(ひとえ)仕立て、筒袖、丈は膝(ひざ)より8センチメートルほど長く、佑紀(ゆき)丈は60センチメートルぐらい、馬乗りは19センチメートルぐらい、袖(そで)付け、脇(わき)は千鳥かがりとし、衿(えり)端と脇との紐(ひも)を結び、肌に直接着用する。くつろげるし、風通しがよく涼しい。布地は生平(きびら)、麻、縮(ちぢみ)など張りのあるもの、また近年は化学繊維、混紡織物など、平織と縮風のものとがあり、無地、縞(しま)、絣(かすり)、中形(ちゅうがた)など多様である。子供、若い男女用もある。下衣は固定したものはなく、すててこを着用していたが、近年は膝丈ぐらいの半ズボンとパッチの中間的形状のものが、上とそろいの布でつくられている
              </ul>
            </p>
          </div>
        </div>
        <div className=" border-y-[1px] border-gray-5 flex bg-white  dark:bg-gray-800 w-[1252px] h-[520px]">
          <div className="w-3/5">
            <img
              className="w-full h-full border-r-2 border-x-slate-600"
              src="https://studio-foret.jp/wp-content/uploads/2020/03/DSC_7583-e1592810518378.jpg"
              alt=""
            />
          </div>
          <div className="w-2/5">
            <h1 className="text-center dark:text-white font-bold text-2xl pt-6 pb-3 ">
              袴
            </h1>

            <p className="pl-8 pr-20 dark:text-white">
              <ul>
                袴とは、洋服でいうズボンのようなもので、着物の上から下半身に履きます。
              </ul>
              <ul>
                深く仕切りが入った馬乗り袴は、剣道や弓道などの武道で着用されています。また、男性は、成人式や結婚式に馬乗り袴を着用するのが一般的です。
              </ul>
              <ul>
                主に女性が着用する行灯袴は、ロングスカートのように仕切りのない形状をしています。大学などの卒業式で多くの女学生が着用している姿が見られるでしょう
              </ul>
            </p>
          </div>
        </div>
        <div className=" border-y-[1px] border-gray-5 flex bg-white  dark:bg-gray-800 w-[1252px] h-[520px]">
          <div className="w-3/5">
            <img
              className="w-full h-full border-r-2 border-x-slate-600"
              src="https://tabiiro.jp/lpimg/leisure/206437/main/img1.jpg"
              alt=""
            />
          </div>
          <div className="w-2/5">
            <h1 className="text-center dark:text-white font-bold text-2xl pt-6 pb-3 ">
              着物
            </h1>

            <p className="pl-8 pr-20 dark:text-white">
              <ul>
                着物の起源は、弥生時代に袖の小さい「小袖」という衣服が民衆の間でひろまり、平安時代以降に着物文化が発展していきました。
              </ul>
              <ul>
                明治時代になって政府による西洋化がすすめられ、着物を日常的に着る習慣は徐々にうすれていきました。
              </ul>
              <ul>
                洋服に対して和服を総称することもあるが，一般には羽織，襦袢(じゅばん)，コートを除いた長着をさす。着物型の衣服が成立したのは奈良時代といわれる。平安末期までは下着として着ていた小袖(こそで)が，鎌倉時代になると上の衣服が省略されて表着として用いられるようになった。室町時代には男女ともに着用していた袴(はかま)も省略され，小袖の着流しとなった。現在の着物は小袖から基本的には変わっていない。着物は袖，身ごろ，衽(おくみ)，衿(えり)，掛衿（共衿）からなり，袖，身ごろは前後が続いた輪裁ちで，左右対称となっている。女物は身丈を着丈より20cmくらい長く仕立て，帯の下でたくしあげて着る。季節によって単(ひとえ)，袷(あわせ)，綿入れなどを着る
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
