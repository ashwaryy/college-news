const Post = require("../models/Post");

const editPost = async (req, res) => {
  const { email } = req.user;
  const { id } = req.params;
  const update = req.body;
  try {
    const allPostsWithGivenID = await Post.findOneAndUpdate(
      { _id: id, user: email },
      update
    );
    const updatedPost = await Post.find({ _id: id, user: email });
    if (updatedPost.length > 0) {
      res.json({ status: "success" });
    } else {
      res.status(403).send("you are not permitted to edit this post");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = editPost;
