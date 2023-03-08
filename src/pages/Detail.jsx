import React from "react";

import useQueryPost from "../hook/useQueryPost";
import Post from "../components/Post";
import { getOnePost } from "../graphql/queries";
export default function Detail({ lang }) {
  const { posts, error } = useQueryPost({ func: getOnePost });
  return !posts.length ? (
    <div className="flex h-screen w-full justify-center pt-40 text-xl font-bold lg:text-4xl"></div>
  ) : (
    <div>
      {posts.map((post) => (
        <Post post={post} lang={lang} />
      ))}
    </div>
  );
}
