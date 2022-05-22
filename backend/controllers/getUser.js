const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    userDetails = await User.findOne({ email: req.user.email });
    userName = userDetails.name;
    userEmail = userDetails.email;
    res.status(200).json({ userName: userName, userEmail: userEmail });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = getUser;
