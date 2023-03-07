import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../graphql/queries";
import Scrollbackbutton from "../components/Scrollbackbutton";
import SliderAuto from "../components/SliderAuto";
import News from "../components/News";
import Rankingboard from "../components/Rankingboard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
function Home({ lang }) {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    getPosts(lang).then((newPosts) => setPosts(newPosts));
  }, [lang]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const remarkable = posts.filter((post) => post.tag === "remarkable");
  // console.log(remarkable);
  const rankingboard = posts.filter((post) => post.tag === "ranking-board");
  const trending = posts.filter((post) => post.tag === "trending");

  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return !posts.length ? (
    <div className="flex h-screen w-screen items-center justify-center"></div>
  ) : (
    <div className="z-10 w-full pb-1 ">
      <div class="must-watch mb-5 lg:flex">
        <div className="px-4 pt-5 pb-5 sm:w-full lg:w-2/3">
          <SliderAuto posts={posts} />
        </div>

        <div className="hidden w-1/3 px-3 pt-5 lg:block lg:h-[400px]">
          <div>
            <div class="relative">
              <div className="after:absolute after:bottom-0 after:h-full after:w-full after:bg-black/20 after:content-['']">
                <img
                  className="h-[400px] w-full rounded-md border border-slate-700 "
                  src={posts[5].image.url}
                />
              </div>
              <div className="bg-gradient absolute bottom-0 w-full p-4">
                <h5 className="overflow-hidden text-ellipsis break-words px-2 pb-10 text-5xl font-bold text-gray-100 md:pb-5 md:text-3xl lg:pb-3 lg:text-xl lg:font-semibold">
                  <a href="">{posts[5].title}</a>
                </h5>
                <div className="flex items-center space-x-3 px-2">
                  <div className="md:text-md text-xl font-light leading-none text-zinc-200 lg:text-xs">
                    {posts[5].topic}
                  </div>
                  <span className="md:text-md text-lg font-light text-gray-200 lg:text-xs">
                    {posts[5].time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  px-4 dark:text-white min-[300px]:flex-col lg:flex-row">
        <div className="min-h-[400px] min-[300px]:w-full lg:w-2/3">
          <h1 className="font-bold">{t("home.home1")}</h1>
          <div className="flex">
            <a
              href={`detail/${remarkable[0].slug}`}
              className="w-[50%] py-4 pr-4 min-[300px]:hidden lg:block"
            >
              <img
                className="rounded-md "
                src={remarkable[0].image.url}
                alt=""
              />
              <div className="py-2 ">
                <h3 className=" text-md font-bold">{remarkable[0].title}</h3>
                <div className="flex py-1">
                  <p className="px-1 text-sm text-zinc-500">
                    {remarkable[0].topic}
                  </p>
                  <p className="px-1 text-sm"> -{remarkable[0].time}</p>
                </div>
              </div>
            </a>
            <div className="flex h-[400px] flex-col py-4 px-2 min-[300px]:w-full lg:w-[50%]">
              <a
                href={`detail/${remarkable[1].slug}`}
                className="min-h-1/3 h-1/3 w-full pb-2 min-[300px]:flex "
              >
                <img
                  className="rounded-md min-[300px]:h-[70px] md:h-[100px]  lg:h-[70px]"
                  src={remarkable[1].image.url}
                  alt=""
                />
                <div className="px-2">
                  <h3 className=" font-bold min-[300px]:text-sm md:text-xl lg:text-sm">
                    {remarkable[1].title}
                  </h3>
                  <div className="flex py-1">
                    <p className="min-[300px]:text-md px-1 text-zinc-500 lg:text-sm">
                      {remarkable[1].topic}
                    </p>
                    <p className="px-1 text-sm"> -{remarkable[1].time}</p>
                  </div>
                </div>
              </a>
              <a
                href={`detail/${remarkable[2].slug}`}
                className="min-h-1/3 h-1/3 w-full pb-2 min-[300px]:flex "
              >
                <img
                  className="rounded-md min-[300px]:h-[70px] md:h-[100px]  lg:h-[70px]"
                  src={remarkable[2].image.url}
                  alt=""
                />
                <div className="px-2">
                  <h3 className=" font-bold min-[300px]:text-sm md:text-xl lg:text-sm">
                    {remarkable[2].title}
                  </h3>
                  <div className="flex py-1">
                    <p className="min-[300px]:text-md px-1 text-zinc-500 lg:text-sm">
                      {remarkable[2].topic}
                    </p>
                    <p className="px-1 text-sm"> -{remarkable[2].time}</p>
                  </div>
                </div>
              </a>
              <a
                href={`detail/${remarkable[3].slug}`}
                className="min-h-1/3 h-1/3 w-full pb-2 min-[300px]:flex "
              >
                <img
                  className="rounded-md min-[300px]:h-[70px] md:h-[100px] lg:h-[70px]"
                  src={remarkable[3].image.url}
                  alt=""
                />
                <div className="px-2">
                  <h3 className=" font-bold min-[300px]:text-sm md:text-xl lg:text-sm">
                    {remarkable[3].title}
                  </h3>
                  <div className="flex py-1">
                    <p className="min-[300px]:text-md px-1 text-zinc-500 lg:text-sm">
                      {remarkable[3].topic}
                    </p>
                    <p className="px-1 text-sm"> -{remarkable[3].time}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-[400px] w-1/3 flex-col px-4 min-[300px]:hidden lg:flex">
          <h1 className="font-bold">{t("home.home2")}</h1>
          <a
            href={`detail/${trending[0].slug}`}
            className="min-h-1/3 h-1/3 w-full pb-2  pt-4 min-[300px]:flex "
          >
            <img
              className="h-[70px] rounded-md "
              src={trending[0].image.url}
              alt=""
            />
            <div className="px-2">
              <h3 className=" text-sm font-bold">{trending[0].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm  text-zinc-500">
                  {trending[0].topic}
                </p>
                <p className="px-1 text-sm"> -{trending[0].time}</p>
              </div>
            </div>
          </a>
          <a
            href={`detail/${trending[1].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
          >
            <img
              className="h-[70px] rounded-md "
              src={trending[1].image.url}
              alt=""
            />
            <div className="px-2">
              <h3 className=" text-sm font-bold">{trending[1].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm text-zinc-500">
                  {trending[1].topic}
                </p>
                <p className="px-1 text-sm"> -{trending[1].time}</p>
              </div>
            </div>
          </a>
          <a
            href={`detail/${trending[2].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
          >
            <img
              className="h-[70px] rounded-md "
              src={trending[2].image.url}
              alt=""
            />
            <div className="px-2">
              <h3 className=" text-sm font-bold">{trending[2].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm text-zinc-500">
                  {trending[2].topic}
                </p>
                <p className="px-1 text-sm"> -{trending[2].time}</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="flex">
        <div className="posts flex flex-col min-[300px]:w-full lg:w-2/3">
          <div className="flex items-center px-4">
            <h1 className="font-bold dark:text-white ">{t("home.home3")}</h1>
          </div>
          <div className="w-full px-4">
            {currentPosts.map((post) => {
              return (
                <div>
                  <News post={post} />
                </div>
              );
            })}
            <div className="paging mb-10">
              <ReactPaginate
                breakLabel={<div className="mr-3"> . . . </div>}
                pageRangeDisplayed={5}
                onPageChange={paginate}
                pageCount={Math.ceil(posts.length / postsPerPage)}
                previousLabel={
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
                    <BsChevronLeft className="flex items-center justify-center text-gray-600" />
                  </div>
                }
                nextLabel={
                  <div className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
                    <BsChevronRight className="flex items-center justify-center text-gray-600" />
                  </div>
                }
                containerClassName="flex justify-center items-center"
                pageClassName="w-8 h-8 dark:text-white rounded mr-1"
                activeClassName="bg-gray-400 dark:bg-blue-500 border dark:border-gray-300 text-white"
                pageLinkClassName="padding-10 w-8 h-8 flex justify-center items-center rounded hover:bg-gray-400 hover:text-white"
              />
            </div>
          </div>
        </div>
        <div className="box-border w-1/3 px-4 min-[300px]:hidden lg:col-span-1 lg:block">
          <Rankingboard posts={rankingboard} />
        </div>
      </div>

      <Scrollbackbutton />
    </div>
  );
}

export default Home;
