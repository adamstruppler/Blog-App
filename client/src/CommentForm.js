import React from 'react'
import PropTypes from 'prop-types'

const CommentForm = ({ handleOnTextChange, submitComment, text }) => {
  return (
    <div>
      <h3> Leave a Comment!</h3>
      <form>
        <textarea placeHolder='Enter a Comment' rows='4' onChange={handleOnTextChange} value={text} />
        <button type='button' onClick={submitComment}>Comment</button>
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  handleOnTextChange: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default CommentForm
