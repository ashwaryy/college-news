const Post = require("../models/Post");
const User = require("../models/User");

const getAllPosts = async (req, res) => {
  try {
    const userDetails = await User.find({ email: req.user.email });
    const userName = userDetails[0].name;
    const allPosts = await Post.find({});
    res.status(200).json({ status: "success", data: allPosts, name: userName });
  } catch (error) {
    res.send(error);
  }
};
module.exports = getAllPosts;
