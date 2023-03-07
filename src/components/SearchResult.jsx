import React from "react";
import useQueryPost from "../hook/useQueryPost";
import { getPostsBySearch } from "../graphql/queries";
import News from "./News";
import { BiErrorAlt } from 'react-icons/bi'

function SearchResult() {
  const { posts, error } = useQueryPost({ func: getPostsBySearch });
  console.log(posts);
  return posts.length == 0 ? (
    <>
    <div className="h-screen w-screen flex items-center justify-center  ">
      <div>
      <div className="flex items-center justify-center  ">
          <BiErrorAlt className='lf:w-20 lg:h-20 w-32 h-32 dark:text-white' />
          <div className='dark:text-white lg:text-2xl text-4xl font-bold px-3'>Sorry we don't have what you are looking for! </div>
      </div>
      <div className="text-center dark:text-white lg:font-extralight lg:text-base text-xl pl-2 pt-10">Recomended: Hey, why don't you visit our <a href="/" className='hover:underline hover:text-violet-600 active:text-violet-800 dark:hover:text-sky-500 dark:active:text-sky-800'>Home page</a> for latest news!</div>
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
