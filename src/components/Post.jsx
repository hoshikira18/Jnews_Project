import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import useQueryPost from "../hook/useQueryPost";
import { getPosts } from "../graphql/queries";
import News from "../components/News";
const Post = ({ post }) => {
  const { posts, error } = useQueryPost({ func: getPosts });
  // object content post
  // code doan nay la ntn nhi
  //
  console.log(post);
  return (
    <div className="">
      <div className="topic flex items-center bg-gray-50 p-4">
        <MdKeyboardArrowRight />
        <p className="">{post.topic}</p>
      </div>

      <div className="mx-auto w-[680px] bg-white p-4">
        <div className="flex w-full justify-center">
          <img src={post.image.url} alt="" />
        </div>
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
      <div className="bg-gray-50">
        <div className="rcm-news w-2/3 p-4">
          {posts.map((post) => {
            return (
              <div>
                <News post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
