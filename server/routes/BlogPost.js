const express = require('express')
const Router = express.Router()
const Post = require('../models/Post')

Router.route('/api/blogpost')
  .post((req, res) => {
    const {img, title, userName, message} = req.body
    const newPost = {img, title, userName, message}
    Post(newPost).save((err, savedPost) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'Successful Post', data: savedPost})
      }
    })
  })

Router.route('/api/blogpost')
  .get((req, res) => {
    Post.find((err, blog) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'Success', blog})
      }
    })
  })

Router.route('/api/blogpost/:blogId')
  .get((req, res) => {
    const blogId = req.params.blogId
    Post.findById({_id: blogId})
      .populate('comments')
      .exec((err, blog) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: 'SUCCESS', data: blog })
        }
      })
  })

Router.route('/api/blogpost/:blogId/comments')
  .post((req, res) => {
    const {text} = req.body
    const newComment = {text}

    Comment(newComment).save((err, savedComment) => {
      if (err) {
        res.json({error: err})
      } else {
        Post.findById({ _id: req.params.blogId }, (err, blog) => {
          if (err) {
            res.json({ error: err })
          } else {
            blog.comments.push(savedComment._id)
            blog.save((err, updatedBlog) => {
              if (err) {
                res.json({ error: err })
              } else {
                res.json({ msg: 'Success', data: updatedBlog })
              }
            })
          }
        })
      }
    })
  })

Router.route('/api/comments/:commentId')
  .delete((req, res) => {
    const commentId = req.params.commentId
    Comment.remove({ _id: commentId }, (err, comment) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: `Deleted: ${comment}`})
      }
    })
  })

Router.route('/api/blogpost/:blogId')
  .delete((req, res) => {
    const deleteId = req.params.blogId
    Post.remove({_id: deleteId}, (err, blog) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'Your Post was deleted', blog })
      }
    })
  })

Router.route('/api/blogpost/:blogId')
  .put((req, res) => {
    const editPostId = req.params.blogId
    Post.findById({ _id: editPostId }, (err, blog) => {
      if (err) {
        console.log('ERROR GETTING HERE', err)
        res.json({ error: err })
      } else {
        blog.title = req.body.title ? req.body.title : blog.title
        blog.message = req.body.message ? req.body.message : blog.message
        blog.img = req.body.img ? req.body.img : blog.img
        blog.userName = req.body.userName ? req.body.userName : blog.userName

        blog.save((err, updatedBlog) => {
          if (err) {
            console.log('ERORR', err)
            res.json({ error: err })
          } else {
            res.json({msg: 'Successfully updated', blog: updatedBlog})
          }
        })
      }
    })
  })

module.exports = Router
