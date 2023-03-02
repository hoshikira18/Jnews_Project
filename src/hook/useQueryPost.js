import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../graphql/queries";
const useQueryPost = ({ func }) => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  console.log(id);
  useEffect(() => {
    func(id)
      .then((res) => {
        console.log(res);
        setPosts(res);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPosts([]);
      });
  }, [func, id]);
  console.log(posts);
  return { posts, error };
};
export default useQueryPost;
