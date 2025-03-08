import {useContext} from 'react'
import { GlobalData } from '../Contexts/GlobalContext'

const Counter = () => {

const {count, handleCount} = useContext(GlobalData)


  return (
    <>
    <button onClick={() => {handleCount(-1)}}>Decrement</button>
    <div>Counter</div>
    <div>{count}</div>
    <button onClick={() => {handleCount(1)}}>Increment</button>
    </>
  )
}

export default Counter