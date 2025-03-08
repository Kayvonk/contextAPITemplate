import { useState, useEffect, createContext, useReducer } from "react";

const initialState = {
  loggedIn: false,
  user: null,
  posts: null,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalData = createContext();

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const [count, setCount] = useState(0);

  const handleCount = (number) => {
    setCount(count + number);
  };

  const userData = {
    id: 1,
    name: "Kayvon",
    posts: [
      {
        id: 1,
        postText: "hello",
      },
      {
        id: 2,
        postText: "bye",
      },
    ],
  };

  const updatePosts = (data) => {
    dispatch({ type: "SET_POSTS", payload: data });
  };

  useEffect(() => {
    if (userData) {
      dispatch({ type: "SET_USER", payload: userData });
      updatePosts(userData.posts);
    }
  }, []);

//   useEffect(() => {
//     console.log(state.posts);
//   }, [state.posts]);

  const data = {
    ...state,
    count,
    setCount,
    handleCount,
    updatePosts,
  };

  return <GlobalData.Provider value={data}>{children}</GlobalData.Provider>;
};

export default GlobalContext;
