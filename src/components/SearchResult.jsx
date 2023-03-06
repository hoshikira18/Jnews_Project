import React from "react";
import useQueryPost from "../hook/useQueryPost";
import { getPostsBySearch } from "../graphql/queries";
import News from "./News";

function SearchResult() {
  const { posts, error } = useQueryPost({ func: getPostsBySearch });
  console.log(posts);
  return !posts.length ? (
    <div></div>
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
