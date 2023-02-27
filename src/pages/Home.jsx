import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../graphql/queries";

import "../App.css";
import Scrollbackbutton from "../components/Scrollbackbutton";
import SliderAuto from "../components/SliderAuto";
// import SliderManual from "../components/SliderManual";
import Footer from "../components/Footer";
import News from "../components/News";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newPosts) => setPosts(newPosts));
  }, []);
  console.log(posts);

  return (
    <div className="w-full">
      <div class="must-watch lg:grid lg:grid-cols-3">
        <div className="mb-5 md:w-full lg:col-span-2">
          <SliderAuto />
        </div>
      </div>
      <div className="">
        <div className="w-2/3">
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <News
                  title={post.title}
                  topic={post.topic}
                  image={post.image.url}
                  content={post.content.text}
                  time={post.time}
                  description={post.description}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Scrollbackbutton />
    </div>
  );
}

export default Home;
