import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import { withTranslation } from "react-i18next";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class DemoKeyboard extends Component {
  sendIndex = (index) => {
    this.props.outputIndex(index);
  };
  render() {
    const { t } = this.props;
    return (
      <BindKeyboardSwipeableViews
        index={this.props.inputIndex}
        onChangeIndex={(index) => {
          this.sendIndex(index);
        }}
        enableMouseEvents
        className="sm:overflow-x-scroll"
      >
        <div className="relative h-[500px] ">
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full bg-gradient-to-r from-[rgba(221,113,103,0.5)] to-[rgba(180,31,17,0.5)] md:block"></div>
          <div className="absolute right-[15%] h-[400px] w-[300px] rounded-lg border border-[#eee] dark:border-black md:h-[450px] md:w-[650px] md:rounded-none">
            <img
              className=""
              src="https://gogen-yurai.jp/wp-content/uploads/2021/01/303780100_675.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-14  left-[4%] h-[220px] w-[300px] bg-[rgba(203,213,225,0.9)] dark:bg-[rgba(31,41,55,0.9)] dark:text-white md:bottom-14 md:bottom-0  md:left-[15%] md:h-[280px] md:w-[360px]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgb(221,113,103)] md:pt-8 md:text-4xl">
              {t("content_culture.lehoi1")}
            </h1>
            <br />
            <p className="pl-10 pr-10 text-sm md:text-base">
              {t("content_culture.content_lh1")}
            </p>
          </div>
        </div>
        <div className="relative h-[500px] ">
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full bg-gradient-to-r from-[rgba(180,31,17,0.5)] to-[rgba(240,206,71,0.5)] md:block"></div>
          <div className="absolute right-[10%]">
            <img
              className=" h-[300px] w-[350px] md:h-[450px] md:w-[650px]"
              src="https://skywardplus.jal.co.jp/wp-content/uploads/2021/12/detail_setsubun.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-[10%] h-[300px] w-[335px] bg-[rgba(225,230,235,0.9)] dark:bg-[rgba(31,41,55,0.8)] dark:text-white  md:bottom-0 md:h-[370px] md:w-[530px] md:bg-[rgba(203,213,225,0.9)]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgb(221,113,103)]  md:pt-8 md:text-4xl">
              {t("content_culture.lehoi2")}
            </h1>
            <br />
            <p className="pl-10 pr-10 text-xs md:text-base">
              <ul>{t("content_culture.content_lehoi2_1")}</ul>
              <ul>{t("content_culture.content_lehoi2_2")}</ul>
              <ul>{t("content_culture.content_lehoi2_3")}</ul>
            </p>
          </div>
        </div>
        <div className="relative h-[500px] ">
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full bg-gradient-to-r from-[rgba(240,206,71,0.5)]  to-[rgba(92,149,228,0.5)] md:block"></div>
          <div className="absolute top-[6%] w-[340px] md:right-[10%] md:h-[450px] md:w-[650px]">
            <img
              className=" "
              src="https://pictbook.info/wp-content/uploads/2018/02/be764e5afcd673f8282ed9794b1fc04e-e1621402393626-1200x630.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-24 left-[7%] h-[230px] w-[340px] bg-[rgba(203,213,225,0.9)] dark:bg-[rgba(31,41,55,0.83)] dark:text-white md:bottom-[7%]  md:left-[10%] md:h-[280px] md:w-[470px]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgba(120,106,37,0.8)] md:pt-8 md:text-4xl">
              {t("content_culture.lehoi3")}
            </h1>
            <br />
            <p className="pl-10 pr-10 text-sm md:text-base ">
              {t("content_culture.content_lehoi3")}
            </p>
          </div>
        </div>

        <div className="relative h-[500px] ">
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full bg-gradient-to-r from-[rgba(92,149,228,0.5)] to-[rgba(117,122,4,0.5)] md:block"></div>
          <div className="absolute right-[10%] h-[350px] w-[400px] md:h-[450px]  md:w-[650px]">
            <img
              className=" "
              src="https://img01.jalannews.jp/img/2021/02/20210219_kodomonohi_010.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-4 left-[7%] h-[300px] w-[380px] bg-[rgba(203,213,225,0.9)] dark:bg-[rgba(31,41,55,0.7)] dark:text-white md:bottom-0  md:left-[10%] md:h-[300px] md:w-[530px]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgba(92,158,232,0.5)]  md:pt-8 md:text-4xl">
              {t("content_culture.lehoi4")}
            </h1>
            <br />
            <p className="pl-10 pr-10 text-sm md:text-base">
              {t("content_culture.content_lehoi4")}
            </p>
          </div>
        </div>

        <div className="relative h-[500px] ">
          {/*doimau */}
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full  bg-gradient-to-r from-[rgba(117,122,4,0.5)] to-[rgba(251,121,0,0.5)] md:block"></div>
          <div className="absolute right-[10%] w-[340px] md:h-[450px] md:w-[650px]">
            <img
              className=" "
              src="https://storage.tenki.jp/storage/static-images/suppl/article/image/3/30/305/30504/1/large.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-[10%]  h-[330px] bg-[rgba(203,213,225,0.9)] dark:bg-[rgba(31,41,55,0.7)]  dark:text-white md:h-[380px] md:w-[530px]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgb(131,113,41)]  md:pt-8 md:text-4xl">
              {t("content_culture.lehoi5")}
            </h1>
            <br />
            <p className="pl-10 pr-10 text-xs md:text-base">
              <ul>{t("content_culture.content_lehoi5_1")}</ul>
              <ul>{t("content_culture.content_lehoi5_2")}</ul>
            </p>
          </div>
        </div>

        <div className="relative h-[500px] ">
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full bg-gradient-to-r from-[rgba(251,121,0,0.5)] to-[rgba(203,189,162,0.5)] md:block"></div>
          <div className="absolute right-[10%] h-[300px] w-[350px] md:h-[450px] md:w-[650px]">
            <img
              className=" "
              src="https://skywardplus.jal.co.jp/wp-content/uploads/2022/07/detail_obon.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-[10%] h-[350px] bg-[rgba(203,213,225,0.9)] dark:bg-[rgba(31,41,55,0.75)]  dark:text-white md:h-[380px] md:w-[540px]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgba(251,121,0,0.5)]  md:pt-8 md:text-4xl">
              {t("content_culture.lehoi6")}
            </h1>
            <br />
            <p className="pl-10 pr-10 text-xs md:text-base">
              {t("content_culture.content_lehoi6")}
            </p>
          </div>
        </div>

        <div className="relative h-[500px] ">
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full bg-gradient-to-r from-[rgba(203,189,162,0.5)] to-[rgba(199,95,224,0.5)]  md:block"></div>
          <div className="absolute right-[10%] w-[340px] md:h-[450px] md:w-[650px]">
            <img
              className=" "
              src="https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2016/02/56b00eecb8289_56b00c90ed6ea_445077124.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-[10%] h-[340px] bg-[rgba(203,213,225,0.9)] dark:bg-[rgba(31,41,55,0.7)]  dark:text-white md:h-[350px] md:w-[530px]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgba(253,253,240,0.7)]  md:pt-8 md:text-3xl">
              <ul>(Lunar calendar Aug15th)</ul>
              <ul>{t("content_culture.lehoi7")}</ul>
            </h1>
            <br />
            <p className="pl-10 pr-10 text-sm md:text-base">
              {t("content_culture.content_lehoi7")}
            </p>
          </div>
        </div>

        <div className="relative h-[500px] ">
          <div className=" absolute bottom-[20%] hidden h-[230px] w-full bg-gradient-to-r from-[rgba(199,95,224,0.5)] to-[rgba(221,113,103,0.5)] md:block"></div>
          <div className="absolute right-[10%] md:h-[450px] md:w-[650px]">
            <img
              className=" "
              src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/09/a00651_01.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-10 left-[5%] h-[270px] bg-[rgba(203,213,225,0.7)] dark:bg-[rgba(31,41,55,0.75)] dark:text-white  md:bottom-0 md:h-[340px] md:w-[530px]">
            <h1 className="pt-4 text-center text-xl font-medium text-[rgba(199,95,224,0.5)]  md:pt-8 md:text-4xl">
              {t("content_culture.lehoi8")}{" "}
            </h1>
            <br />
            <p className="pl-10 pr-10 text-xs md:text-base">
              {t("content_culture.content_lehoi8")}
            </p>
          </div>
        </div>
      </BindKeyboardSwipeableViews>
    );
  }
}

export default withTranslation()(DemoKeyboard);
