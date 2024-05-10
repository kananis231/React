import React from 'react'
import { useState } from 'react'

function Todo() {
    const[inputValue,setInputValue] = useState('')
    const[todos,setTdods] = useState([])
    const[editId , seteditId] =useState(null)
    localStorage.setItem("todo",JSON.stringify(todos))
    function addtask() {
        if (editId !== null) {
            setTdods(todos.map(todo=>{
                if (todo.id === editId) {
                    return {...todo , text : inputValue}
                }
                return todo
            }))

            seteditId(null)
            setInputValue('')
        } else {
            let newTodos = {
                id : new Date().getTime(),
                text : inputValue
            }
            setTdods([...todos, newTodos])
            setInputValue('')    
        }
      
    }


    function deleteTodo(id) {
        setTdods(todos.filter((todo)=>(
            todo.id !== id
        )))
    }
    function editTodo(id) {
        const todoToedit = todos.find(todo => todo.id === id)
        setInputValue(todoToedit.text)
        seteditId(id)
    }
  return (
    <div>
        <h1> TODO LIST</h1>
        <input type='text' placeholder='Enter Your Task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={addtask}>ADD TASK</button>
        {
         todos&&   todos.map((el,i)=>(
            <div key={i}>
                <h1>{el.text}</h1>
                <button onClick={()=>deleteTodo(el.id)}>Delete</button>
                <button onClick={()=>editTodo(el.id)}>Edit</button>
            </div>
                
            ))
        }
    </div>
  )
}

export default Todo