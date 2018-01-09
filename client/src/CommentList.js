import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const CommentList = ({comments}) => {
  return (
    <div>
      <h4>Comments</h4>
      <div>
        {
          comments && comments.length > 0
            ? comments.map(comment => {
              return <CommentCard
                key={comment._id}
                text={comment.text}
              />
            })
            : <p>No Comments</p>
        }
      </div>
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
