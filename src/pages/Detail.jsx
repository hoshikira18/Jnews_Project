import React from "react";

import useQueryPost from "../hook/useQueryPost";
import Post from "../components/Post";
import { getOnePost } from "../graphql/queries";
export default function Detail() {
  const { posts, error } = useQueryPost({ func: getOnePost });
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}