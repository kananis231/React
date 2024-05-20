import React,{useState} from 'react'
import { Link , useNavigate , useParams } from 'react-router-dom'
function Editpost({editpost , posts}) {
    const{id} = useParams()
    let ans = posts.find(post=>post.id === parseInt(id))
    const [title , setTitle] = useState(ans.title)
    const [content , setContent] = useState(ans.content)
    const [image , setImage] = useState(ans.image)
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        editpost(ans.id,title,content,image)
        navigate('/')
    }
    function handleChange(e) {
      setImage(e.target.files[0])
    }
  return (
    <>
    <h1>Edit Page</h1>
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

export default Editpost