import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import News from "../components/News";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../graphql/queries";
const Post = ({ post, lang }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(lang).then((newPosts) => setPosts(newPosts));
  }, [lang]);

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
    <div className="flex h-screen w-screen items-center justify-center">
      ádasd
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <div className="sm:w-screen lg:w-[70%]">
        <div className="topic flex items-center bg-gray-50 p-4 dark:bg-gray-900 dark:text-blue-400 ">
          <MdKeyboardArrowRight />
          <p className="">{post.topic}</p>
        </div>
        <div className="flex w-full justify-center px-4 pb-4">
          <img className="min-[300px]:w-[100%]" src={post.image.url} alt="" />
        </div>

        <div className="mx-auto bg-white p-4 pb-40 dark:bg-gray-800 dark:text-white min-[300px]:w-screen lg:w-[900px]">
          <div className="title">
            <h1 className="text-4xl font-bold lg:p-4">{post.title}</h1>
          </div>
          <div className="date flex items-center lg:p-4">
            <GoPrimitiveDot />
            <p className="px-2">{post.time}</p>
          </div>
          <div
            className="content lg:p-4"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></div>
        </div>
      </div>
      <div className="posts flex flex-col pt-10 sm:w-full lg:w-2/3">
        <div className="flex items-center px-4">
          <h1 className="font-bold dark:text-white ">Gợi ý cho bạn</h1>
        </div>
        <div className="w-full px-4">
          {currentPosts.map((post) => {
            return (
              <div>
                <News post={post} />
              </div>
            );
          })}
          <div className="paging pb-10">
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
              pageClassName="w-8 h-8 dark:text-white rounded mr-1"
              activeClassName="bg-gray-400 text-white dark:bg-blue-500 border dark:border-gray-300"
              pageLinkClassName="padding-10 w-8 h-8 flex justify-center items-center rounded hover:bg-gray-400 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
