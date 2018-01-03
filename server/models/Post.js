const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  img: {type: String, required: true},
  title: {type: String, required: true},
  user: {type: String, required: true},
  message: {type: String, required: true}
})

module.export = mongoose.model('Post', Post)
