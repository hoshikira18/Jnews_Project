import React from "react";

function Rankingboard() {
  function Showmore() {
    let button = document.getElementById("button");
    let show = document.getElementById("more");

    if (show.classList.contains("hidden")) {
      show.classList.remove("hidden");
      button.innerHTML = "Hide";
      // console.log("hello");
    } else {
      show.classList.add("hidden");
      button.innerHTML = " Show More";
    }
  }

  return (
    <div class="h-auto w-full pb-24 md:mx-5 lg:mx-6   ">
      <div class="flex h-auto w-full items-center justify-center pr-10 sm:pr-0 lg:h-10 lg:w-5/6 ">
        <img
          class="w-15 mx-4 h-16 md:mx-2 lg:h-7 lg:w-9"
          src="https://cdn-icons-png.flaticon.com/512/81/81460.png"
        />
        <span class="text-center text-6xl font-medium dark:text-slate-200 md:text-4xl lg:text-2xl">
          Reading ranking
        </span>
      </div>
      <hr class="my-12 mx-16 flex w-5/6 justify-center border-2 border-gray-700 md:my-4 md:border lg:mx-0" />
      <div class=" h-auto rounded-md border-2 border-[#eee] bg-gray-100 dark:border-black dark:bg-gray-200 md:mx-0 lg:w-5/6 ">
        <div class="grid-rows grid h-auto w-full ">
          <div class="grid h-full w-full grid-rows-5  ">
            <div class="flex h-[8rem] w-full flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x ">
              <div class="mr-1 basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-lg">
                01
              </div>
              <div class="h-1/2 w-full basis-10/12 overflow-hidden text-ellipsis pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-0 lg:pl-2 lg:text-xs ">
                ロシア ウクライナ西部にもミサイル攻撃 侵攻1年前に戦闘激化
              </div>
            </div>
            <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
              <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-lg">
                02
              </div>
              <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                Tiêu đề dsao in coinason vona dop
              </div>
            </div>
            <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
              <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-lg">
                03
              </div>
              <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                Tiêu đề dsao in coinason vona dop
              </div>
            </div>
            <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
              <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-lg">
                04
              </div>
              <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                Tiêu đề dsao in coinason vona dop
              </div>
            </div>
            <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-b-2 dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
              <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-lg">
                05
              </div>
              <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                Tiêu đề dsao in coinason vona dop
              </div>
            </div>
            <div class=" h-20 bg-gray-100 dark:hidden dark:border dark:border-black md:h-10 lg:h-6"></div>
          </div>
          <div class="hidden" id="more">
            <div class="grid h-full w-full grid-rows-5  ">
              <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
                <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-base">
                  06
                </div>
                <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                  Tiêu đề dsao in coinason vona dop
                </div>
              </div>
              <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
                <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-base">
                  07
                </div>
                <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                  Tiêu đề dsao in coinason vona dop
                </div>
              </div>
              <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
                <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-base">
                  08
                </div>
                <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                  Tiêu đề dsao in coinason vona dop
                </div>
              </div>
              <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
                <div class="basis-2/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-base">
                  09
                </div>
                <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                  Tiêu đề dsao in coinason vona dop
                </div>
              </div>
              <div class="flex h-[8rem] flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x  ">
                <div class="basis-2/12 pt-3 text-center text-6xl font-medium md:text-5xl lg:pt-1 lg:text-base">
                  10
                </div>
                <div class="h-1/2 w-full basis-10/12 pl-8 pt-3 text-4xl font-light hover:underline md:text-3xl lg:pt-1 lg:pl-2 lg:text-xs ">
                  Tiêu đề dsao in coinason vona dop
                </div>
              </div>
              <div class=" h-20 w-full border border-[#eee] bg-gray-100 dark:hidden dark:border dark:border-black md:h-12 lg:h-5 "></div>
            </div>
          </div>
        </div>
        <button
          onClick={Showmore}
          class="inline-flex h-24 w-full items-center justify-center rounded-sm bg-gray-900 text-gray-400 hover:bg-gray-700 hover:text-white dark:border dark:border-t-2 dark:border-black md:h-20 lg:h-11"
        >
          <h1 class="text-4xl font-semibold lg:text-lg">{">"}</h1>
          <span
            id="button"
            class="px-1 pt-[2px] text-4xl font-medium md:text-2xl lg:text-sm lg:font-light"
          >
            Show more
          </span>
        </button>
      </div>
    </div>
  );
}
export default Rankingboard;
