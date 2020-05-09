const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let User = require("../models/user.model");
const auth = require("../middleware/auth");
const jwtSecret = process.env.JWT_SECRET;

//POST /auth/register
//Register new user
//private access
router.route("/register").post(async (req, res) => {
  const { name, email, password } = req.body;

  //validate
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    //check for existing user
    const user = await User.findOne({ email });
    if (user) throw Error("User already exists");

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Bcrypt Error");

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error("Hash Error");

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error("Error with saving user");

    const token = jwt.sign({ id: savedUser.id }, jwtSecret, {
      expiresIn: 3600,
    });
    if (!token) throw Error("Token error");

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//POST /auth/login
//Log-in user
//Public access
router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;

  //validate
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    //check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error("User does not exist");

    //validate email/password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Incorrect email/password");

    //get token
    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: 3600 });
    if (!token) throw Error("Token error");

    res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

//GET /auth/user
//Get user data
//Private access
router.route("/user").get(auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("User Does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
