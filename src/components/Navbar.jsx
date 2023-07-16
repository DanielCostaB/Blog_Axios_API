import React from 'react'
import { Link } from 'react-router-dom'

Link

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li to={"/new"} className='new-btn'>Novo Post</li>
      </ul>
    </nav>
  )
}

export default Navbar