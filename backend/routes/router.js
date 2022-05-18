const router = require("express").Router();
const getAllPosts = require("../controllers/getAllPosts");
const createPost = require("../controllers/createPost");
const editPost = require("../controllers/editPost");
const deletePost = require("../controllers/deletePost");
const registerUser = require("../controllers/registerUser");
const userLogin = require("../controllers/userLogin");
const authMiddleware = require("../middleware/auth");
const getUser = require("../controllers/getUser");
router.post("/register", registerUser);
router.post("/login", userLogin);
router
  .route("/posts")
  .get(authMiddleware, getAllPosts)
  .post(authMiddleware, createPost);
router
  .route("/posts/:id")
  .put(authMiddleware, editPost)
  .delete(authMiddleware, deletePost);

router.route("/user").get(authMiddleware, getUser);

module.exports = router;
