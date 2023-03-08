import React from "react";
import useQueryPost from "../hook/useQueryPost";
import { getPostsBySearch } from "../graphql/queries";
import News from "./News";
import { BiErrorAlt } from "react-icons/bi";

function SearchResult() {
  const { posts, error } = useQueryPost({ func: getPostsBySearch });
  return posts.length == 0 ? (
    <>
      <div className="min-h-screen">
        <div className="flex justify-center pt-60 ">
          <BiErrorAlt className=" h-32 w-32 dark:text-white md:h-20 md:w-20" />
          <div className="flex items-center px-3 text-xl font-bold dark:text-white md:text-2xl">
            Sorry we don't have what you are looking for!{" "}
          </div>
        </div>
        <div className="pl-2 text-center font-extralight dark:text-white">
          Recomended: Hey, why don't you visit our{" "}
          <a
            href="/"
            className="dark:acyive:text-sky-800 hover:text-violet-600 hover:underline active:text-violet-800 dark:hover:text-sky-500"
          >
            Home page
          </a>{" "}
          for latest news!
        </div>
      </div>
    </>
  ) : (
    <div className="min-h-screen">
      <div className="flex h-16 items-center py-2">
        <h1 className="font-bold dark:text-white">Search Result</h1>
      </div>
      {posts.map((post) => (
        <div>
          <News post={post} />
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
