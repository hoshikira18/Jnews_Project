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
import useQueryPost from "../hook/useQueryPost";

function Home() {
  const { posts, error } = useQueryPost({ func: getPosts });

  const POSTS = posts.filter((post) => post.language === "JP");
  const postsVN = posts.filter((post) => post.language === "VN");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return !POSTS.length ? (
    <div className="flex h-screen w-screen items-center justify-center"></div>
  ) : (
    <div className="z-10 w-full pb-10">
      <div class="must-watch mb-5 lg:flex">
        <div className="px-4 pt-5 sm:w-full lg:w-2/3">
          <SliderAuto />
        </div>

        <div className="hidden w-1/3 px-3 pt-5 lg:block lg:h-[400px]">
          <div>
            <div class="relative ">
              <img
                className="h-[400px] w-full  border border-slate-700"
                src={POSTS[5].image.url}
              />
              <div className="bg-gradient absolute bottom-0 w-full p-4">
                <h5 className="mb:text-3xl overflow-hidden text-ellipsis break-words px-2 pb-8 text-5xl font-bold text-gray-100 md:pb-5 lg:pb-3 lg:text-xl lg:font-semibold">
                  <a href="">{POSTS[5].title}</a>
                </h5>
                <div className="flex items-center space-x-3 px-2">
                  <div className="md:text-md text-xl font-light leading-none text-white lg:text-xs">
                    {POSTS[5].topic}
                  </div>
                  <span className="md:text-md text-lg font-light text-gray-200 lg:text-xs">
                    {POSTS[5].time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  px-4 dark:text-white min-[300px]:flex-col lg:flex-row">
        <div className="h-[400px] min-[300px]:w-full lg:w-2/3">
          <h1 className="font-bold">Đáng chú ý</h1>
          <div className="flex">
            <a
              href={`detail/${POSTS[5].slug}`}
              className="w-[45%] py-4 pr-4 min-[300px]:hidden lg:block"
            >
              <img src={POSTS[5].image.url} alt="" />
              <div className="py-2 ">
                <h3 className=" text-md font-bold">{POSTS[5].title}</h3>
                <div className="flex py-1">
                  <p className="px-1 text-sm">{POSTS[5].topic}</p>
                  <p className="px-1 text-sm"> -{POSTS[5].time}</p>
                </div>
              </div>
            </a>
            <div className="flex h-[400px] flex-col py-4 px-2 min-[300px]:w-full lg:w-[55%]">
              <a
                href={`detail/${POSTS[5].slug}`}
                className="min-h-1/3 h-1/3 w-full pb-2 min-[300px]:flex "
              >
                <img
                  className="min-[300px]:h-[100px] lg:h-[70px]"
                  src={POSTS[5].image.url}
                  alt=""
                />
                <div className="px-2">
                  <h3 className=" min-[300px]:text-md font-bold lg:text-sm">
                    {POSTS[5].title}
                  </h3>
                  <div className="flex py-1">
                    <p className="min-[300px]:text-md px-1 lg:text-sm">
                      {POSTS[5].topic}
                    </p>
                    <p className="px-1 text-sm"> -{POSTS[5].time}</p>
                  </div>
                </div>
              </a>
              <a
                href={`detail/${POSTS[5].slug}`}
                className="min-h-1/3 h-1/3 w-full pb-2 min-[300px]:flex "
              >
                <img
                  className="min-[300px]:h-[100px] lg:h-[70px]"
                  src={POSTS[5].image.url}
                  alt=""
                />
                <div className="px-2">
                  <h3 className=" min-[300px]:text-md font-bold lg:text-sm">
                    {POSTS[5].title}
                  </h3>
                  <div className="flex py-1">
                    <p className="min-[300px]:text-md px-1 lg:text-sm">
                      {POSTS[5].topic}
                    </p>
                    <p className="px-1 text-sm"> -{POSTS[5].time}</p>
                  </div>
                </div>
              </a>
              <a
                href={`detail/${POSTS[5].slug}`}
                className="min-h-1/3 h-1/3 w-full pb-2 min-[300px]:flex "
              >
                <img
                  className="min-[300px]:h-[100px] lg:h-[70px]"
                  src={POSTS[5].image.url}
                  alt=""
                />
                <div className="px-2">
                  <h3 className=" min-[300px]:text-md font-bold lg:text-sm">
                    {POSTS[5].title}
                  </h3>
                  <div className="flex py-1">
                    <p className="min-[300px]:text-md px-1 lg:text-sm">
                      {POSTS[5].topic}
                    </p>
                    <p className="px-1 text-sm"> -{POSTS[5].time}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-[400px] w-1/3 flex-col px-4 min-[300px]:hidden lg:flex">
          <h1 className="font-bold">Trending</h1>
          <a
            href={`detail/${POSTS[5].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full py-4 pb-2 "
          >
            <img className="h-[70px]" src={POSTS[5].image.url} alt="" />
            <div className="px-2">
              <h3 className=" text-sm font-bold">{POSTS[5].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm">{POSTS[5].topic}</p>
                <p className="px-1 text-sm"> -{POSTS[5].time}</p>
              </div>
            </div>
          </a>
          <a
            href={`detail/${POSTS[5].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
          >
            <img className="h-[70px]" src={POSTS[5].image.url} alt="" />
            <div className="px-2">
              <h3 className=" text-sm font-bold">{POSTS[5].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm">{POSTS[5].topic}</p>
                <p className="px-1 text-sm"> -{POSTS[5].time}</p>
              </div>
            </div>
          </a>
          <a
            href={`detail/${POSTS[5].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
          >
            <img className="h-[70px]" src={POSTS[5].image.url} alt="" />
            <div className="px-2">
              <h3 className=" text-sm font-bold">{POSTS[5].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm">{POSTS[5].topic}</p>
                <p className="px-1 text-sm"> -{POSTS[5].time}</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="flex">
        <div className="posts flex flex-col sm:w-full lg:w-2/3">
          <div className="flex items-center px-4">
            <h1 className="font-bold dark:text-white ">New</h1>
          </div>
          <div className="w-full px-4">
            {currentPosts.map((post) => {
              return (
                <div>
                  <News post={post} />
                </div>
              );
            })}
            <div className="paging">
              <ReactPaginate
                breakLabel={<div className="mr-3"> . . . </div>}
                pageRangeDisplayed={3}
                onPageChange={paginate}
                pageCount={Math.ceil(POSTS.length / postsPerPage)}
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
        <div className="box-border w-1/3 px-4 sm:hidden lg:col-span-1 lg:block">
          <Rankingboard />
        </div>
      </div>

      <Scrollbackbutton />
    </div>
  );
}

export default Home;
