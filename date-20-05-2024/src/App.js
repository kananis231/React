import './App.css';
import React , {useState} from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Addpost from './Addpost';
import Editpost from './Editpost';
function App() {
  const[posts , setPosts] = useState([])
  
  function addnewpost(newPost) {
    newPost.id = Date.now()
    setPosts([...posts , newPost])
  }
  function deletepost(id) {
    setPosts(posts.filter((el)=>(
       el.id !== id
    )))
  }
  function editpost(id , title, content,image) {
    let updatedpost = posts.map((post)=>(
      post.id === id ? {...post , title:title , content : content , image : image} : post
    ))
    setPosts(updatedpost)
  }
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home posts={posts} deletepost={deletepost} />}></Route>
        <Route path='/add' element={<Addpost addnewpost={addnewpost}/>}></Route>
        <Route path='/edit/:id' element={<Editpost editpost={editpost} posts={posts}/>}></Route>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
