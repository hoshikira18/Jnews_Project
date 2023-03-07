import React from "react";
import useQueryPost from "../hook/useQueryPost";
import { getPosts, getPostsBySearch, getPostsByTag } from "../graphql/queries";
import { useTranslation } from "react-i18next";

function Rankingboard({ posts }) {
  const { t } = useTranslation();
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
    <div class="sticky top-5 h-auto w-full pb-24 min-[300px]:hidden md:mx-5 lg:mx-2 lg:block">
      <div class="flex h-auto  w-full items-center py-4 pr-10 sm:pr-0 lg:h-10 lg:w-5/6 ">
        <span class="text-6x font-bold dark:text-slate-200 md:text-4xl lg:text-2xl">
          {t("home.home4")}
        </span>
      </div>
      {/* <hr class="my-12 mx-16 flex w-5/6 justify-center border-2 border-gray-700 md:my-4 md:border lg:mx-0" /> */}
      <div class=" h-auto rounded-md border-2 border-[#eee] bg-gray-100 dark:border-black dark:bg-gray-200 md:mx-0 lg:w-5/6 ">
        <div class="grid-rows grid h-auto w-full ">
          <div class="grid h-full w-full grid-rows-5  ">
            {posts.map((post, index) => {
              return (
                <div class="flex h-[8rem] w-full flex-row items-center divide-x-4 divide-black border border-[#eee] dark:border-black md:divide-x-2 lg:h-[4rem] lg:divide-x ">
                  <div class="mr-1 basis-1/12 pt-3 text-center text-5xl font-medium md:text-4xl lg:pt-1 lg:text-lg">
                    {index + 1}
                  </div>
                  <a
                    href={`detail/${post.slug}`}
                    class="h-1/2 w-full basis-10/12 overflow-hidden text-ellipsis pl-8 pt-3 text-4xl font-bold hover:underline md:text-3xl lg:pt-0 lg:pl-2 lg:text-xs "
                  >
                    {post.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rankingboard;
