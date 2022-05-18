const Post = require("../models/Post");
const User = require("../models/User");
const createPost = async (req, res) => {
  try {
    const userDetails = await User.findOne({ email: req.user.email });
    const userName = userDetails.name;
    const { title, body, image } = req.body;
    const newPost = {
      title: title,
      body: body,
      image: image,
      user: req.user.email,
      author: userName,
    };
    const createdPost = await Post.create(newPost);
    res.status(200).json({ status: "Post created", data: createdPost });
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = createPost;
