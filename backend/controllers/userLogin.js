const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const passwordValidation = (passwordEnteredByUser, hash, res, email) => {
  bcrypt.compare(passwordEnteredByUser, hash, function (error, isMatch) {
    if (error) {
      res.status(404).json({ message: "error" });
    } else if (!isMatch) {
      res.status(401).json({ message: "password mismatch" });
    } else {
      const id = new Date().getDate();
      const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.status(200).json({ status: "success", token: token });
    }
  });
};
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findQueryUserinDB = await User.findOne({ email: email });
    if (findQueryUserinDB) {
      passwordValidation(password, findQueryUserinDB.password, res, email);
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.json({ error });
  }
};

module.exports = userLogin;
