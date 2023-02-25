import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../graphql/queries";

import Header from "../components/Header";
import "../App.css";
import Scrollbackbutton from "../components/Scrollbackbutton";
import SliderAuto from "../javascripts/SliderAuto";
import SliderManual from "../javascripts/SliderManual";
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
                  id={post.id}
                  description={post.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />

      <Scrollbackbutton />
      <div class="MustWatch grid grid-cols-10 h-300px">
        <div className="mb-5 h-80% col-span-7">
          <SliderAuto />
        </div>
        <div>
          <h1 className="text-5xl text-white font-bold">Must Watch</h1>
        </div>
      </div>
      <SliderManual />
    </div>
  );
}

export default Home;
