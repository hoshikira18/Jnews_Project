import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../graphql/queries";
import Scrollbackbutton from "../components/Scrollbackbutton";
import SliderAuto from "../components/SliderAuto";
import News from "../components/News";
import Rankingboard from "../components/Rankingboard";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newPosts) => setPosts(newPosts));
  }, []);

  return (
    <div className="w-full">
      <div class="must-watch lg:grid lg:grid-cols-3">
        <div className="mb-5 px-4 pt-2 sm:w-full lg:col-span-2">
          <SliderAuto />
        </div>
      </div>
      <div className="posts flex">
        <div className="px-4 sm:w-full lg:w-2/3">
          {posts.map((post) => {
            return (
              <div>
                <News post={post} />
              </div>
            );
          })}
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
