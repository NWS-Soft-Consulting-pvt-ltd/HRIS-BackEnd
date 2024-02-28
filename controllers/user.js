const userSchema = require("../models/userModel");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const savedUser = await userSchema.create({
      email: email,
      password: hashPassword,
    });
    res.status(200).json(savedUser);
  } catch (error) {
    console.error(error);
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return res.status(400).json("Email exists");
    } else {
      return res.status(500).json("Sign-up error");
    }
  }
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json("User not found!");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json("Invalid password!");
    }
    return res.status(200).json("Login successful!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error!");
  }
};

module.exports = { signupUser, authenticateUser };
