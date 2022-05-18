const User = require("../models/User");
const registerUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await User.create(newUser);
    res.json({ status: "Success", data: createdUser });
  } catch (error) {
    res.status(409).json(error.message);
  }
};

module.exports = registerUser;
