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
  return (
    <div className="z-10 w-full">
      <div class="must-watch mb-5 lg:flex">
        <div className="px-4 pt-2 sm:w-full lg:w-2/3">
          <SliderAuto />
        </div>
        <div className="hidden h-[450px] w-1/3 px-2 lg:block">
          <div>
            <div class="relative m-2 h-full">
              <img
                className="m-auto w-full border border-slate-700  lg:h-full lg:w-full"
                src="https://www.surfertoday.com/images/stories/sunrisesunsettime.jpg"
              />
              <div className="bg-gradient absolute bottom-0 w-full p-4">
                <h5 className="mb:text-3xl overflow-hidden text-ellipsis break-words px-2 pb-8 text-5xl font-bold text-gray-100 md:pb-5 lg:pb-3 lg:text-xl lg:font-semibold">
                  <a href="">
                    Title kjbc ácno én inc cobc kjwoc vaownocjkw ksnalcnlan ska
                    csajk íaci ócakn
                  </a>
                </h5>
                <div className="flex items-center space-x-3 px-2">
                  <div className="md:text-md text-xl font-light leading-none text-white lg:text-xs">
                    Tags
                  </div>
                  <span className="md:text-md text-lg font-light text-gray-200 lg:text-xs">
                    1 giờ trước
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="posts flex">
        <div className="px-4 sm:w-full lg:w-2/3">
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
        <div className="box-border w-1/3 px-4 sm:hidden lg:col-span-1 lg:block">
          <Rankingboard />
        </div>
      </div>

      <Scrollbackbutton />
    </div>
  );
}

export default Home;
