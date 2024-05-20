import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
function Home({posts , deletepost}) {
  function handleDelete(id) {
    deletepost(id)
  }
  const[searchItem , setsearchItem] = useState('')
  const filteredPost = posts.filter((el)=>(
    el.title.toLowerCase().includes(searchItem.toLowerCase())
  ))
  return (
    <div>
        <h1>WELCOME TO OUR APP</h1>
        <input value={searchItem} onChange={(e)=>setsearchItem(e.target.value)} />
        <br/><br/><br/>
        {
            filteredPost.map((el)=>(
                <>
                <h2>{el.title}</h2>
                <p>{el.content}</p>
                <img src={URL.createObjectURL(el.image)} alt='post' style={{width : "250px", height : "auto"}}/>

                <br/><br/><br/>
                <button onClick={()=>handleDelete(el.id)}>Delete</button>
                <Link to={`/edit/${el.id}`}>
                  <button>Edit Blog</button>
                </Link>
                <br/> <br/><br/>
                </>
            ))
        }
        <Link to="/add">ADD POST</Link>
    </div>
  )
}

export default Home