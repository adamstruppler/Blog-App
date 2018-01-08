import React from 'react'
import PropTypes from 'prop-types'

const EditBlogPostForm = ({
  title, message, img, userName, onTitleChange,
  onMessageChange, onImageChange, onUserNameChange, submitPostToServer
}) =>
  <div>
    <h1>Edit Blog Post</h1>
    <div>
      <form>

        <div>
          <label>Title</label>
          <input value={title} onChange={onTitleChange} />
        </div>

        <div>
          <label>Message</label>
          <input value={message} onChange={onMessageChange} />
        </div>

        <div>
          <label>Image</label>
          <input value={img} onChange={onImageChange} />
        </div>

        <div>
          <label>User Name</label>
          <input value={userName} onChange={onUserNameChange} />
        </div>

        <div>
          <button onClick={submitPostToServer}>Submit</button>
        </div>

      </form>
    </div>
  </div>

EditBlogPostForm.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  onUserNameChange: PropTypes.func.isRequired,
  submitPostToServer: PropTypes.func.isRequired

}

export default EditBlogPostForm
