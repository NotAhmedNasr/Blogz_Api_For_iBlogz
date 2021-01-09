const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  body: {
    type: String,
  },
  photos: [String],
  tags: [String],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  likers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;