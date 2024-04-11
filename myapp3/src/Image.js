import React from 'react'
import { useState } from 'react'
function Image(props) {
  const[count,setcount] = useState(0)
  function increment (){
      setcount(count + 1)
  }
  function decrement() {
    if (count === 0) {
      setcount(0)
    } else {
      setcount(count - 1)
    }
  }
  function reset() {
    setcount(0)
  }
  return (
    <div id='pro'>
      <img src={props.neture} alt='' id='img'/>
      <h1>Like And Dislike : {count}</h1>
      
          <div id='lik'>
            <button  onClick={increment} >Increment</button>
            <button  onClick={decrement} >Decrement</button>
            <button  onClick={reset} >Reset</button>
          </div>
    </div>
  )
}

export default Image