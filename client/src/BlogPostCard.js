import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '2%',
    background: '#2c3e50'
  },
  button: {
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px'
  }
}

const BlogPostCard = ({deletePost, showUniquePost, blog, post}) => {
  return (
    <div style={style.container}>
      <div>
        <h3> {post.title}</h3>
        <img src={post.img} />
        <p>{post.message}</p>
        <p>{post.userName}</p>
        <Link to={`/blogpost/${post._id}`}> View Post </Link>
        <Link to={`/edit-blogpost/${post._id}`}> Edit Post </Link>

        <div style={style.button}>
          <button onClick={() => deletePost(post)}>Delete Post</button>
          <button onClick={() => showUniquePost(post)}>More Info</button>
        </div>
      </div>
    </div>

  )
}

BlogPostCard.propTypes = {
  deletePost: PropTypes.func.isRequired,
  showUniquePost: PropTypes.func.isRequired,
  blog: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired
}

export default BlogPostCard
