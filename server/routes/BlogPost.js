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

module.exports = Router
