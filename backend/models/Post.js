const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
  },
  body: {
    type: String,
    required: [true, "must provide body"],
  },

  user: {
    type: String,
    required: [true, "must provide user"],
  },
  image: {
    type: String,
    required: [true, "must provide image url"],
  },
  author: {
    type: String,
    required: [true, "must provide author"],
  },
});

module.exports = mongoose.model("Post", PostSchema);
