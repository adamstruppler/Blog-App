const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  img: {type: String, required: true},
  title: {type: String, required: true},
  userName: {type: String, required: true},
  message: {type: String, required: true}
})

module.exports = mongoose.model('Post', Post)
