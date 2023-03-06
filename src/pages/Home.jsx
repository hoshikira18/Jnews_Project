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
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newPosts) => setPosts(newPosts));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return !posts.length ? (
    <div></div>
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
                src={posts[5].image.url}
              />
              <div className="bg-gradient absolute bottom-0 w-full p-4">
                <h5 className="mb:text-3xl overflow-hidden text-ellipsis break-words px-2 pb-8 text-5xl font-bold text-gray-100 md:pb-5 lg:pb-3 lg:text-xl lg:font-semibold">
                  <a href="">{posts[5].title}</a>
                </h5>
                <div className="flex items-center space-x-3 px-2">
                  <div className="md:text-md text-xl font-light leading-none text-white lg:text-xs">
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

      <div className="flex h-[400px] px-4 dark:text-white">
        <div className="w-2/3">
          <h1 className="font-bold">Đáng chú ý</h1>
          <div className="flex">
            <a href={`detail/${posts[10].slug}`} className="w-[45%] py-4 pr-4">
              <img src={posts[10].image.url} alt="" />
              <div className="py-2 ">
                <h3 className=" text-sm font-medium">{posts[10].title}</h3>
                <div className="flex py-1">
                  <p className="px-1 text-sm">{posts[10].topic}</p>
                  <p className="px-1 text-sm"> -{posts[10].time}</p>
                </div>
              </div>
            </a>
            <div className="flex w-[55%] flex-col py-4 px-2">
              <a
                href={`detail/${posts[11].slug}`}
                className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
              >
                <img className="h-[70px]" src={posts[11].image.url} alt="" />
                <div className="px-2">
                  <h3 className=" text-sm font-medium">{posts[11].title}</h3>
                  <div className="flex py-1">
                    <p className="px-1 text-sm">{posts[11].topic}</p>
                    <p className="px-1 text-sm"> -{posts[11].time}</p>
                  </div>
                </div>
              </a>
              <a
                href={`detail/${posts[12].slug}`}
                className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
              >
                <img className="h-[70px]" src={posts[12].image.url} alt="" />
                <div className="px-2">
                  <h3 className=" text-sm font-medium">{posts[12].title}</h3>
                  <div className="flex py-1">
                    <p className="px-1 text-sm">{posts[12].topic}</p>
                    <p className="px-1 text-sm"> -{posts[12].time}</p>
                  </div>
                </div>
              </a>
              <a
                href={`detail/${posts[17].slug}`}
                className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
              >
                <img className="h-[70px]" src={posts[17].image.url} alt="" />
                <div className="px-2">
                  <h3 className=" text-sm font-medium">{posts[17].title}</h3>
                  <div className="flex py-1">
                    <p className="px-1 text-sm">{posts[17].topic}</p>
                    <p className="px-1 text-sm"> -{posts[17].time}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-1/3 flex-col px-4">
          <h1 className="font-bold">Trending</h1>
          <a
            href={`detail/${posts[14].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full py-4 pb-2 "
          >
            <img className="h-[70px]" src={posts[14].image.url} alt="" />
            <div className="px-2">
              <h3 className=" text-sm font-medium">{posts[14].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm">{posts[14].topic}</p>
                <p className="px-1 text-sm"> -{posts[14].time}</p>
              </div>
            </div>
          </a>
          <a
            href={`detail/${posts[15].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
          >
            <img className="h-[70px]" src={posts[15].image.url} alt="" />
            <div className="px-2">
              <h3 className=" text-sm font-medium">{posts[15].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm">{posts[15].topic}</p>
                <p className="px-1 text-sm"> -{posts[15].time}</p>
              </div>
            </div>
          </a>
          <a
            href={`detail/${posts[16].slug}`}
            className="min-h-1/3 relative flex h-1/3 w-full pb-2 "
          >
            <img className="h-[70px]" src={posts[16].image.url} alt="" />
            <div className="px-2">
              <h3 className=" text-sm font-medium">{posts[16].title}</h3>
              <div className="flex py-1">
                <p className="px-1 text-sm">{posts[16].topic}</p>
                <p className="px-1 text-sm"> -{posts[16].time}</p>
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
                pageCount={Math.ceil(posts.length / postsPerPage)}
                previousLabel={
                  <div className="mr-3 flex h-8 w-8 items-center justify-center bg-gray-400">
                    <BsChevronLeft className="flex items-center justify-center text-gray-600" />
                  </div>
                }
                nextLabel={
                  <div className="ml-3 flex h-8 w-8 items-center justify-center bg-gray-400">
                    <BsChevronRight className="flex items-center justify-center text-gray-600" />
                  </div>
                }
                containerClassName="flex justify-center items-center"
                pageClassName="w-8 h-8 rounded mr-1"
                activeClassName="bg-gray-400 text-white"
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
