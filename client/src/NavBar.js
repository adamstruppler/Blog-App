import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>HOME</Link>
      <Link to='/blogpost'>BLOG POSTS</Link>
      <Link to='/create-blogpost'>CREATE POST</Link>
    </nav>
  )
}

export default NavBar
