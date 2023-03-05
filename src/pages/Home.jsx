import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../graphql/queries";
import Scrollbackbutton from "../components/Scrollbackbutton";
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
      <div className="h-[1000px]">
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
      {/* <Footer /> */}

      <Scrollbackbutton />
      
    </div>
  );
}

export default Home;
