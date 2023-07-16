import axios from 'axios';

import React from 'react';

import { useState, useEffect } from 'react';

const Home = () => {
 
const [posts, setposts] = useState([])

const getPosts = async() => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}; 

useEffect(() => {
  getPosts()
}, [])
  return <div>Home</div>
}

export default Home