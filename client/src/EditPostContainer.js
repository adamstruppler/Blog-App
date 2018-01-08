import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import EditBlogPostForm from './EditBlogPostForm'
import PropTypes from 'prop-types'

class EditPostContainer extends Component {
  state = {
    title: undefined,
    message: undefined,
    img: undefined,
    userName: undefined,
    loading: true
  }

static propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

componentDidMount () {
  this.loadBlogPostsFromServer()
}

onTitleChange = (e) => this.setState({ title: e.target.value })
onMessageChange = (e) => this.setState({ message: e.target.value })
onImageChange = (e) => this.setState({ img: e.target.value })
onUserNameChange = (e) => this.setState({ userName: e.target.value })

loadBlogPostsFromServer = () => {
  $.ajax({
    url: `/api/blogpost/${this.props.match.params.blogId}`,
    method: 'GET'
  }).done((response) => {
    const {title, message, userName, img} = response.data
    this.setState({
      title,
      message,
      img,
      userName,
      loading: false
    })
  })
}

submitPostToServer = (e) => {
  e.preventDefault()
  const {title, message, userName, img} = this.state
  const blog = {title, message, userName, img}
  $.ajax({
    url: `/api/blogpost/${this.props.match.params.blogId}`,
    method: 'PUT',
    data: blog
  }).done((response) => {
    alert(`${response.blog.title} updated`)
    this.props.history.push(`/blogpost/${response.blog._id}`)
  })
}

render () {
  const {title, message, userName, img} = this.state
  return (
    <div>
      {
        !this.state.loading
          ? <EditBlogPostForm
            title={title}
            Message={message}
            img={img}
            userName={userName}
            onTitleChange={this.onTitleChange}
            onMessageChange={this.onMessageChange}
            onImageChange={this.onImageChange}
            onUserNameChange={this.onUserName}
            submitPostToServer={this.submitPostToServer}
          />
          : <h1>Loading ......</h1>
      }
    </div>
  )
}
}

export default withRouter(EditPostContainer)
