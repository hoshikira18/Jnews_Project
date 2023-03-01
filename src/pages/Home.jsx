import React from "react";
import Header from "../components/Header";
import "../App.css";
import Scrollbackbutton from "../components/Scrollbackbutton";
import SliderAuto from "../javascripts/SliderAuto";
import SliderManual from "../javascripts/SliderManual";
import Footer from "../components/Footer"
import Rankingboard from"../components/Rankingboard"
import News from "../components/News";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../graphql/queries";
import News_next_to_slideauto from "../components/News_next_to_slideauto";
import Bread from '../components/Test'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newPosts) => setPosts(newPosts));
  }, []);
  console.log(posts);

  return (
    <>
    <Bread/>
    <div className="h-[40000px] bg-white dark:bg-gray-400">
      <Scrollbackbutton />
      <div class="MustWatch lg:grid lg:grid-cols-10 h-auto ">
        <div className="mb-5 h-80% col-span-7">
          <SliderAuto />
        </div>
        <div className="col-span-3 flex place-items-center ">
          <News_next_to_slideauto/>
        </div>
        {/* <div>
          <h1 className="text-5xl text-white font-bold">Must Watch</h1>
        </div> */}
      </div>
      <div className="text-center w-full text-6xl underline font-medium text-gray-700">
        <h1>Sport News</h1>
      </div>
      <SliderManual />
      <div className="w-full grid grid-cols-3 h-[2000px] ">
      <div className="h-[1000px] col-span-2 ">
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
              />
            </div>
          );
        })}
      </div>
      <div className=" ">
        <Rankingboard/>
      </div>
    </div>
    </div>
    <Footer/>
  </>
  );
}

export default Home;
