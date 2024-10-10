import { useState, useEffect, createContext, useReducer } from 'react'

const initialState = {
    loggedIn: false,
    user: null
}

const globalReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export const GlobalData = createContext()

const GlobalContext = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)
    const [count, setCount] = useState(0)


    const handleCount = (number) => {
        setCount(count + number)
    }

    const userData = {
        id: 1,
        name: "Kayvon"
    }


    useEffect(() => {
        if (userData) {
            dispatch({ type: "SET_USER", payload: userData })
        }
    }, [])


    const data = {
        ...state,
        count,
        setCount,
        handleCount
    }

    return <GlobalData.Provider value={data}>{children}</GlobalData.Provider>
}

export default GlobalContext