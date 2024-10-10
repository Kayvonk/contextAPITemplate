import { useContext, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import { GlobalData } from "./Contexts/GlobalContext";

function App() {
  const { user } = useContext(GlobalData);

  useEffect(() => {
    console.log("user:", user);
  }, [user]);

  return (
    <>
      <Counter></Counter>
      <div>{user?.name}</div>
    </>
  );
}

export default App;
