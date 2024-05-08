import React from 'react'
import { useState } from 'react'

function Todo() {
    const[inputValue,setInputValue] = useState('')
    const[todos,setTdods] = useState([])
    localStorage.setItem("todo",JSON.stringify(todos))
    function addtask() {
        let newTodos = {
            text : inputValue
        }
        setTdods([...todos, newTodos])
        setInputValue('')
    }
  return (
    <div>
        <h1> TODO LIST</h1>
        <input type='text' placeholder='Enter Your Task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={addtask}>ADD TASK</button>
        {
         todos&&   todos.map((el,i)=>(
                <h1 key={i}>{el.text}</h1>
            ))
        }
    </div>
  )
}

export default Todo