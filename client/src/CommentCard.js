import React from 'react'
import PropTypes from 'prop-types'

const CommentCard = ({text}) => {
  return (
    <h5> {text} </h5>
  )
}

CommentCard.propTypes = {
  text: PropTypes.string.isRequired
}

export default CommentCard
