import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import axios from "axios";
import PostsContainer from "./components/PostsContainer";
import Header from "./components/Header";

function App() {
  const [posts, setPosts] = useImmer([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleFavourite = (id) => {
    setPosts((draft) => {
      const post = draft.find((post) => id === post.id);
      post.isFavourite = !post.isFavourite;
      if (post.isFavourite) {
        return setCounter(counter + 1);
      }
      if (!post.isFavourite) {
        return setCounter(counter - 1);
      }
    });
  };

  const [count, setCount] = useState(+localStorage.getItem("count"));
  function deleteLocal() {
    localStorage.removeItem("count");
    setCount(1);
  }
  function handleClick() {
    setCount(count + 1);
    localStorage.setItem("count", count);
  }

  async function fetchPosts() {
    setIsLoading(true);
    const { data } = await axios.get("./posts.json");
    setPosts(data);
  }

  useEffect(() => {
    try {
      fetchPosts();
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Header
        posts={posts}
        counter={counter}
        count={localStorage.getItem("count")}
        deleteLocal={deleteLocal}
      />
      <div className="body">
        <main>
          <PostsContainer
            posts={posts}
            isLoading={isLoading}
            handleFavourite={handleFavourite}
            handleClick={handleClick}
          />
        </main>
      </div>
    </>
  );
}

export default App;
