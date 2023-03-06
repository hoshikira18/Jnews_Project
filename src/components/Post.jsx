import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import useQueryPost from "../hook/useQueryPost";
import { getPosts } from "../graphql/queries";
import News from "../components/News";
const Post = ({ post }) => {
  const { posts, error } = useQueryPost({ func: getPosts });

  return !posts.length ? (
    <div></div>
  ) : (
    <div className="">
      <div className="topic flex items-center bg-gray-50 p-4 dark:bg-gray-800 dark:text-blue-400">
        <MdKeyboardArrowRight />
        <p className="">{post.topic}</p>
      </div>
      <div className="flex w-full justify-center p-4">
        <img className="w-[60%]" src={post.image.url} alt="" />
      </div>

      <div className="mx-auto w-[900px] bg-white p-4 pb-40 dark:bg-gray-800 dark:text-white">
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
      <div className="flex bg-gray-50 dark:bg-gray-900">
        <div className="rcm-news p-4 md:w-full lg:w-2/3">
          <p className="p-4 text-3xl font-bold text-slate-500">
            Recommend for you
          </p>

          <div>
            {posts.map((post) => {
              return (
                <div>
                  <News post={post} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ads sticky top-10 right-0 mt-24 h-[700px] w-1/3 px-4 min-[320px]:hidden lg:block">
          <div className="bg-gray-1 00 h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
