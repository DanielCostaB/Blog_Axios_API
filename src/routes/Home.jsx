import axios from 'axios';

import React from 'react';

import { useState, useEffect } from 'react';

import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
 
const [posts, setposts] = useState([])

const getPosts = async() => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts"
    );

    const data = response.data;

    setposts(data);
  } catch (error) {
    console.log(error);
  }
}; 

useEffect(() => {
  getPosts()
}, []);


  return (
  <div>
    <h1>Últimos Posts</h1>
    {posts.length === 0 ? (
    <p>Carregando...</p>
    ) : (
      posts.map((post) => (
        <div className='post' key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn">
            Ler mais
          </Link>
        </div>
      ))
    )}
  </div>
  );
};

export default Home;