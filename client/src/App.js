import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import $ from 'jquery'
import Home from './Home'
import BlogPosts from './BlogPosts'
import CreateBlogPost from './CreateBlogPost'
import BlogPostContainer from './BlogPostContainer'
import EditPostContainer from './EditPostContainer'
import NavBar from './NavBar'

class App extends Component {
  state = {
    posts: undefined
  }

  componentDidMount () {
    this.loadBlogPostFromServer()
  }

  loadBlogPostFromServer = () => {
    $.ajax({
      url: '/api/blogpost',
      method: 'GET'
    }).done((response) => {
      this.setState({posts: response.blog})
    })
  }

  submitBlogPost = (e) => {
    e.preventDefault()
    const newPost = {
      title: this.state.title,
      img: this.state.img,
      userName: this.state.userName,
      message: this.state.message
    }
    $.ajax({
      url: '/api/blogpost',
      method: 'POST',
      data: newPost
    }).done((response) => {
    })
  }

  deletePost = (blog) => {
    $.ajax({
      url: `/api/blogpost/${blog._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadBlogPostsFromServer()
    })
  }

  showUniquePost = (blog) => {
    $.ajax({
      url: `/api/blogpost/${blog._id}`,
      method: 'GET'
    }).done((response) => {
      const blog = response.data
      alert(`${blog.title}
      ${blog.description}`)
    })
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />

          {
            this.state.posts
              ? <Route path='/create-blogpost' render={() => <CreateBlogPost loadBlogPostsFromServer={this.loadBlogPostsFromServer} />} />
              : 'No Posts'
          }

          <Route exact path='/blogpost/:blogId' render={() => <BlogPostContainer />} />

          {
            this.state.posts
              ? <Route exact path='/blogpost' render={() => <BlogPosts showUniquePost={this.showUniquePost} deletePost={this.deletePost} posts={this.state.posts} />} />
              : 'Error!'
          }

          {
            this.state.posts
              ? <Route path='/edit-blogpost/:blogId' render={() => <EditPostContainer posts={this.state.posts} />} />
              : 'no posts'}
        </div>
      </Router>
    )
  }
}

export default App
