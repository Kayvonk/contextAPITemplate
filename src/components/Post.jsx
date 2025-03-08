import { useContext, useEffect } from "react";
import { GlobalData } from "../Contexts/GlobalContext";

const Post = () => {
  const { posts, updatePosts } = useContext(GlobalData);

  const examplePost = {
    id: 3,
    postText: "added post",
  };

  const addPost = () => {
    // updatePost([])
    console.log("addPost");    
    // posts.push(examplePost);
    try{
      // update in database first

      // then update global state
      updatePosts([...posts, examplePost])


    } catch (err) {
      console.log(err);
      
    }
    
  };

  useEffect(() => {
    console.log("posts:", posts);
  }, [posts]);





  return (
    <>
      <button onClick={addPost}>Add Post</button>
      <div>Posts</div>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <div>{post.postText}</div>
          </div>
        ))
      ) : (
        <div>No posts to display</div>
      )}
    </>
  );
};

export default Post;
