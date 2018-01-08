import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const BlogPostCard = ({deletePost, showUniquePost, blog, post}) => {
  return (
    <div>
      <div>
        <h3> {post.title}</h3>
        <img src={post.img} />
        <p>{post.message}</p>
        <p>{post.userName}</p>
        <Link to={`/blogpost/${post._id}`}> View Post </Link>
        <Link to={`/edit-blogpost/${post._id}`}> Edit Post </Link>

        <div>
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
