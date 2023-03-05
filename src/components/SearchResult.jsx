import React from "react";
import useQueryPost from "../hook/useQueryPost";
import { getPostsBySearch } from "../graphql/queries";

function SearchResult() {
  const { posts, error } = useQueryPost({ func: getPostsBySearch });
  console.log(posts);
  return !posts.length ? <div></div> : <div>{posts[0].title}</div>;
}

export default SearchResult;
