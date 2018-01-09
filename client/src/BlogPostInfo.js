import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const BlogPostInfo = ({post, comments, submitComment, handleOnTextChange, text}) => {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <img src={post.img} />
        <p>{post.message}</p>
        <p>{post.userName}</p>
        <CommentForm
          handleOnTextChange={handleOnTextChange}
          submitComment={submitComment}
          text={text}
        />
        <CommentList
          comments={comments} />
      </div>
    </div>
  )
}

BlogPostInfo.propTypes = {
  post: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired

}

export default BlogPostInfo
