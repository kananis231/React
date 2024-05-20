import React from 'react'
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
function Addpost({addnewpost}) {
    const [title , setTitle] = useState('')
    const [content , setContent] = useState('')
    const[image,setImage] = useState(null)
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        const newPost = {title , content , image}
        addnewpost(newPost)
        navigate('/')
    }
    function handleChange(e) {
      setImage(e.target.files[0])
    }
  return (
    <>
    <h1>ADD POST PAGE</h1>

    <form onSubmit={handleSubmit}>
        <h1>Title : </h1>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} />

        <br/><br/><br/>

        <h1>Content :</h1>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

        <br/><br/><br/>

        <input type='file' onChange={handleChange} />

        <br/><br/><br/>
        
        <button type='submit'>ADD POST</button>
    </form>

    <br/><br/><br/>

    <Link to="/">BACK TO HOME</Link>
    </>
  )
}

export default Addpost