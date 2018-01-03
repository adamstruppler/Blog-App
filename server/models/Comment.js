const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  username: {type: String, required: true},
  message: {type: String, required: true}
})

module.exports = mongoose.model('Comment', Comment)
