import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'
import CreateBlogPostForm from './CreateBlogPostForm'

class CreateBlogPost extends Component {
  state = {
    title: undefined,
    message: undefined,
    img: undefined,
    userName: undefined
  }

  static propTypes = {
    loadBlogPostsFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  onTitleChange = (e) => this.setState({ title: e.target.value })
  onMessageChange = (e) => this.setState({ message: e.target.value })
  onImageChange = (e) => this.setState({ img: e.target.value })
  onUserNameChange = (e) => this.setState({ userName: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, message, userName, img} = this.state
    const post = {title, message, userName, img}
    $.ajax({
      url: '/api/blogpost',
      method: 'POST',
      data: post
    }).done((response) => {
      this.props.loadBlogPostsFromServer()
      this.props.history.push('/blogpost')
    })
  }

  render () {
    return (
      <div>
        <CreateBlogPostForm
          title={this.state.title}
          message={this.state.message}
          img={this.state.img}
          userName={this.state.userName}
          onTitleChange={this.onTitleChange}
          onMessageChange={this.onMessageChange}
          onImageChange={this.onImageChange}
          onUserNameChange={this.onUserName}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(CreateBlogPost)
