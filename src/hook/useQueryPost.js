import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../graphql/queries";
const useQueryPost = ({ func }) => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  // console.log(posts);
  useEffect(() => {
    func(slug)
      .then((res) => {
        // console.log(res);
        setPosts(res);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPosts([]);
      });
  }, [func, slug]);
  return { posts, error };
};
export default useQueryPost;
