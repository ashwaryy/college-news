const Post = require("../models/Post");

const deletePost = async (req, res) => {
  const { email } = req.user;
  const { id } = req.params;
  try {
    const postToBeDeleted = await Post.find({ _id: id });
    if (postToBeDeleted.length === 0) {
      res.status(404).send("Post not found");
      return;
    }
    if (postToBeDeleted[0].user === email) {
      await Post.findByIdAndDelete({ _id: id, user: email });
      res.json({ status: "successfully deleted" });
    } else {
      res.status(403).send("you are not authorised to delete this post");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = deletePost;
