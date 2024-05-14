import React from 'react'
import { Link } from 'react-router-dom'
function Home({posts , deletepost}) {
  function handleDelete(id) {
    deletepost(id)
  }
  return (
    <div>
        <h1>WELCOME TO OUR APP</h1>
        {
            posts.map((el)=>(
                <>
                <h2>{el.title}</h2>
                <p>{el.content}</p>
                <button onClick={()=>handleDelete(el.id)}>Delete</button>
                <br/> <br/><br/>
                </>
            ))
        }
        <Link to="/add">ADD POST</Link>
    </div>
  )
}

export default Home