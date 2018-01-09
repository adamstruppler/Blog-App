import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '2%',
    background: '#2c3e50'
  }
}

const CommentCard = ({text}) => {
  return (
    <div style={style.container}>
      <h5>{text}</h5>
    </div>
  )
}

CommentCard.propTypes = {
  text: PropTypes.string.isRequired
}

export default CommentCard
