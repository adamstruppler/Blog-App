import React from 'react'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    padding: '10px',
    background: '#2c3e50',
    justifyContent: 'space-around',
    borderRadius: '10px'
  },
  nav: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#7f8c8d',
    marginLeft: '3%',
    marginRight: '3%'
  },
  title: {
    color: '#d35400'
  }
}

const NavBar = () => {
  return (
    <div style={style.container}>
      <div style={style.title}>
        <h1>Blogging Beer</h1>
      </div>
      <nav style={style.nav}>
        <Link style={style.link} to='/'>HOME</Link>
        <Link style={style.link} to='/blogpost'>BLOG POSTS</Link>
        <Link style={style.link} to='/create-blogpost'>CREATE POST</Link>
      </nav>
    </div>
  )
}

export default NavBar
