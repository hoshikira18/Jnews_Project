import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class DemoKeyboard extends Component {
  sendIndex = (index) => {
    this.props.outputIndex(index);
  };
  render() {
    return (
      <BindKeyboardSwipeableViews
        index={this.props.inputIndex}
        onChangeIndex={(index) => {
          this.sendIndex(index);
        }}
        enableMouseEvents
      >
        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(221,113,103,0.5)] to-[rgba(180,31,17,0.5)] absolute">

          </div>
          <div className="w-[650px] h-[450px] right-[15%] absolute">
            <img
              className=""
              src="https://gogen-yurai.jp/wp-content/uploads/2021/01/303780100_675.jpg"
              alt=""
            />
          </div>
          <div className="w-[360px] h-[280px] bottom-0 left-[15%] dark:bg-[rgba(31,41,55,0.9)]  dark:text-white bg-[rgba(203,213,225,0.9)] absolute">
            <h1 className="font-medium text-center text-4xl text-[rgb(221,113,103)] pt-8">Jan1st：正月</h1>
            <br />
            <p className="pl-10 pr-10">
              正月（しょうがつ）は、各暦の年始め（新年を迎える月）のことである。文化的には旧年が無事に終わったことと新年を祝う行事。正月飾りをし、正月行事を行ったりおせち料理を食べたりして祝う。
            </p>
          </div>
        </div>
        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(180,31,17,0.5)] to-[rgba(240,206,71,0.5)] absolute">

          </div>
          <div className="right-[10%] absolute">
            <img
              className=" h-[450px] w-[650px]"
              src="https://skywardplus.jal.co.jp/wp-content/uploads/2021/12/detail_setsubun.jpg"
              alt=""
            />
          </div>
          <div className="w-[530px] h-[370px] bottom-0 left-[10%] dark:bg-[rgba(31,41,55,0.8)]  dark:text-white bg-[rgba(203,213,225,0.9)] absolute">
            <h1 className="font-medium text-center text-4xl text-[rgb(221,113,103)] pt-8">Feb3rd：節分</h1>
            <br />
            <p className="pl-10 pr-10">
              <ul>
                節分とは、「鬼を追い払って新年を迎える、立春の前日の行事」です。
              </ul>
              <ul>
                立春の前日ですが、立春の日付は年により異なるため2月3日とは限りません。鬼を追い払う行事は、「おにやらい」（追儺）という宮廷の行事が発祥だそう。
              </ul>
              <ul>
                殿上人（てんじょうびと）と呼ばれる身分の高い貴族が、桃の弓、葦の矢を持ち、鬼に扮した家来たちを追いかけて逃走させる…というものでした。豆まきには「鬼を打ち払う」意味と、「豆を投げ与えて恵み、静まってもらう」という、2つの意味が込められています。
              </ul>
            
            </p>
          </div>
        </div>
        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(240,206,71,0.5)]  to-[rgba(92,149,228,0.5)] absolute">

          </div>
          <div className="w-[650px] h-[450px] right-[10%] top-[6%] absolute">
            <img
              className=" "
              src="https://pictbook.info/wp-content/uploads/2018/02/be764e5afcd673f8282ed9794b1fc04e-e1621402393626-1200x630.jpg"
              alt=""
            />
          </div>
          <div className="w-[470px] h-[280px] bottom-[7%] left-[10%] dark:bg-[rgba(31,41,55,0.83)]  dark:text-white bg-[rgba(203,213,225,0.9)] absolute">
            <h1 className="font-medium text-center text-4xl text-[rgba(240,206,71,0.8)] pt-8">Mar3rd：ひな祭り</h1>
            <br />
            <p className="pl-10 pr-10">
             ひな祭りとは、女の子のすこやかな成長と健康を願う、3月3日の「桃の節句」の行事です。節句とは別に、日本の公家には「ひいな（ひな）遊び」という幼い女の子の遊びがありました。この言葉は源氏物語などにもちょくちょく出てきます。要するに人形を使ったおままごとですね。  
            </p>
          </div>
        </div>

        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(92,158,232,0.5)] to-[rgba(117,122,4,0.5)] absolute">

          </div>
          <div className="w-[650px] h-[450px] right-[10%] absolute">
            <img
              className=" "
              src="https://img01.jalannews.jp/img/2021/02/20210219_kodomonohi_010.jpg"
              alt=""
            />
          </div>
          <div className="w-[530px] h-[300px] bottom-0 left-[10%] dark:bg-[rgba(31,41,55,0.7)]  dark:text-white bg-[rgba(203,213,225,0.9)] absolute">
            <h1 className="font-medium text-center text-4xl text-[rgba(92,158,232,0.5)] pt-8">May5th：子供の日</h1>
            <br />
            <p className="pl-10 pr-10">
            こどもの日とは、「こどもたちの人格を重んじ、幸福をはかるとともに、お母さんにも感謝する日」です（祝日法より）。こどもたちの健やかな成長を願って揚げられる鯉のぼり。もともと、武士が玄関に幟（のぼり）や旗指物（はたさしもの）を飾っていたことから始まったようです。こどもの日の食べ物といえば、やはり柏餅。ふんわり漂うカシワの葉の香りが、おいしさを増してくれます。
            </p>
          </div>
        </div>

        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(117,122,4,0.5)] to-[rgba(238,232,188,0.5)] absolute">

          </div>
          <div className="w-[650px] h-[450px] right-[10%] absolute">
            <img
              className=" "
              src="https://storage.tenki.jp/storage/static-images/suppl/article/image/3/30/305/30504/1/large.jpg"
              alt=""
            />
          </div>
          <div className="w-[530px] h-[380px] bottom-0 left-[10%] dark:bg-[rgba(31,41,55,0.7)]  dark:text-white bg-[rgba(203,213,225,0.9)] absolute">
            <h1 className="font-medium text-center text-4xl text-[rgb(240,206,71,1)] pt-8">Jul7th：七夕</h1>
            <br />
            <p className="pl-10 pr-10">
             <ul>
                七夕は五節句のひとつで、縁起の良い「陽数」とされる奇数が連なる7月7日の夕べに行われるため「七夕の節句」といいます。また、笹を用いて行事をすることから、別名「笹の節句」と呼ばれています。七夕に笹に短冊を飾るのは、中国の乞巧奠（きこうでん）や日本古来の棚機津女（たなばたつめ）の信仰、書道学問の上達を願う行事も含まれて今のような祭りに変わってゆきます。七夕の行事食はそうめん。その歴史は古く千年前に遡ります。
              </ul>
              <ul>
                そうめんのルーツは、中国伝来の「索餅」（さくべい）という、縄のようにあんだ小麦粉のお菓子のような料理だといわれています。
              </ul>
            </p>
          </div>
        </div>

        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(238,232,188,0.5)] to-[rgba(203,189,162,0.5)] absolute">

          </div>
          <div className="w-[650px] h-[450px] right-[10%] absolute">
            <img
              className=" "
              src="https://skywardplus.jal.co.jp/wp-content/uploads/2022/07/detail_obon.jpg"
              alt=""
            />
          </div>
          <div className="w-[540px] h-[380px] bottom-0 left-[10%] dark:bg-[rgba(31,41,55,0.75)]  dark:text-white bg-[rgba(203,213,225,0.9)] absolute">
            <h1 className="font-medium text-center text-4xl text-[rgb(238,232,188)] pt-8">Jul15th：お盆</h1>
            <br />
            <p className="pl-10 pr-10">
            お盆は先祖の霊を弔うために行われる、一連の夏の行事のことを指し、現代では日本の夏を彩る風物詩といっても過言ではない。名前の由来は仏教の「盂蘭盆会（うらぼんえ）」。お盆はご先祖様を弔う行事。かといって、一体何をどう、準備すればよいのか頭を悩ますところだ。端的にいえば、代々のご先祖の霊がお盆の時期に戻ってくるから、その霊をお迎えし、帰るときにはお送りするために、丁寧におもてなしをすると考えればよい。仏壇に精霊棚（盆棚）を設置し、お供えも行う。代表的な供え物は、キュウリやナスに楊枝や割り箸を刺して、馬や牛に見立てた精霊馬、精霊牛だ。この世とあの世を行き来するご先祖様の乗り物だという。
            </p>
          </div>
        </div>

        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(203,189,162,0.5)] to-[rgba(199,95,224,0.5)]  absolute">

          </div>
          <div className="w-[650px] h-[450px] right-[10%] absolute">
            <img
              className=" "
              src="https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2016/02/56b00eecb8289_56b00c90ed6ea_445077124.jpg"
              alt=""
            />
          </div>
          <div className="w-[530px] h-[350px] bottom-0 left-[10%] dark:bg-[rgba(31,41,55,0.7)]  dark:text-white bg-[rgba(203,213,225,0.9)] absolute">
            <h1 className="font-medium text-center text-3xl text-[rgba(253,253,240,0.7)] pt-8">
              <ul>(Lunar calendar Aug15th)</ul>
              <ul>Sep29th 2023: 月見</ul>
            </h1>
            <br />
            <p className="pl-10 pr-10">
            一年中見ることのできるお月様ですが、お月見は特に十五夜の日に行われます。十五夜というと、ススキを連想する方も多いかもしれませんね。ススキは、月の神さまをお招きする依り代（よりしろ）としてお供えをします。お月見といえば、やっぱり月見団子！
              月見団子は中国のお菓子、月餅を真似して作られたそうです。丸い形は満月を連想し、縁起がいいと言われています。
            </p>
          </div>
        </div>

        <div className="h-[500px] relative ">
          <div className=" w-full h-[230px] bottom-[20%] bg-gradient-to-r from-[rgba(199,95,224,0.5)] to-[rgba(221,113,103,0.5)] absolute">

          </div>
          <div className="w-[650px] h-[450px] right-[10%] absolute">
            <img
              className=" "
              src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/09/a00651_01.jpg"
              alt=""
            />
          </div>
          <div className="w-[530px] h-[340px] bottom-0 left-[5%] dark:bg-[rgba(31,41,55,0.75)]  dark:text-white bg-[rgba(203,213,225,0.7)] absolute">
            <h1 className="font-medium text-center text-4xl text-[rgba(199,95,224,0.5)] pt-8">Nov15th：七五三 </h1>
            <br />
            <p className="pl-10 pr-10">
            七五三はお子さまが無事に育ったことに感謝し、これからの健やかな成長をお祈りする行事です。古くからの習わしでは、赤ちゃんが住んでいる土地の守り神・氏神（うじがみ）様がまつられた神社に参拝するのが一般的です。しかし、必ず氏神様でないといけないわけではありません。ご祈祷やお参りを終えたら、絵馬を書いたりおみくじを引いたりして、楽しい思い出を作りましょう。字を書く練習を始めたお子さまであれば、ひとりで絵馬にお願い事を書くとお参りの記念になります。
            </p>
          </div>
        </div>
      </BindKeyboardSwipeableViews>
    );
  }
}

export default DemoKeyboard;
