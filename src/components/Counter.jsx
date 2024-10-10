import {useContext} from 'react'
import { GlobalData } from '../Contexts/GlobalContext'

const Counter = () => {

const {count, setCount, handleCount} = useContext(GlobalData)


  return (
    <>
    <button onClick={() => {handleCount(-1)}}>Decrement</button>
    <div>Counter</div>
    {count}
    <button onClick={() => {handleCount(1)}}>Increment</button>
    </>
  )
}

export default Counter