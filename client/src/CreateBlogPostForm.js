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

const CreatePostForm = ({onTitleChange, onUserNameChange, onMessageChange, onImageChange, handleSubmit}) => {
  return (
    <div style={style.container}>
      <h3> Create A Post</h3>
      <div>

        <form>
          <div>
            <label>Title</label>
            <input type='text' placeholder={'Enter Title'} onChange={onTitleChange} />
          </div>

          <div>
            <label>Message</label>
            <input type='text' placeholder={'Enter Message'}onChange={onMessageChange} />
          </div>

          <div>
            <label>Image</label>
            <input type='text' placeholder={'Enter Image'} onChange={onImageChange} />
            <input type='text' placeholder={'Enter User Name'} onChange={onUserNameChange} />
          </div>

          <div style={style.button}>
            <button onClick={handleSubmit}>Submit Post</button>
          </div>
        </form>

      </div>
    </div>
  )
}

CreatePostForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  onUserNameChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired

}

export default CreatePostForm
