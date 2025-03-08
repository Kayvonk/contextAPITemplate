import { useContext, useEffect } from "react";
import { GlobalData } from "./Contexts/GlobalContext";
import "./App.css";
import Counter from "./components/Counter";
import Post from "./components/Post";

function App() {
  const { user } = useContext(GlobalData);

  // useEffect(() => {
  //   console.log("user:", user);
  // }, [user]);

  return (
    <>
      <Counter></Counter>
      <div>{user?.name}</div>
      <Post/>
    </>
  );
}

export default App;
