import React from 'react'
import BlogPostCard from './BlogPostCard'
import PropTypes from 'prop-types'

const BlogPosts = ({posts, deletePost, showUniquePost, blog}) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        {
          posts.map(post => {
            return (
              <BlogPostCard
                post={post}
                deletePost={deletePost}
                showUniquePost={showUniquePost}
              />
            )
          })
        }
      </div>
    </div>
  )
}

BlogPosts.propTypes = {
  blog: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  showUniquePost: PropTypes.func.isRequired

}

export default BlogPosts
