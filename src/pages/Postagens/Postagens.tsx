import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import blogFecht from '../../axios/config'
import './styles.scss';

import { useNavigate } from 'react-router-dom';


const Postagens = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await blogFecht.get("/posts/1/comments");

      const data = response.data;
      setPosts(data);
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPosts()
  },[])

  return (
    <div className='home'>
      <div style={{display:'flex', justifyContent:"space-around" }}>
        <h2>Home</h2>
        <button onClick={()=> {navigate('/')}} title='Voltar para login' style={{width:'150px', height:'50px'}}>voltar para login</button>
      </div>
      <h1>Ultimos posts: </h1>
      {posts.length ===  0 ? (<p>carregando...</p> ) : (
        posts.map((post) =>(
          <div className='post' key={post.id}>
           <p>{post.name}</p> 
           <h2>{post.email}</h2> 
           {/* <p>{post.body}</p>  */}
          </div>
        ))
      )}
    </div>

  )
}

export default Postagens

