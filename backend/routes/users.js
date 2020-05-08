const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let User = require("../models/user.model");
const jwtSecret = process.env.JWT_SECRET;

//Get /users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Post /users
//Register new user
router.route("/register").post((req, res) => {
  const { name, email, password } = req.body;

  //validate
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    //check for existing user
    User.findOne({ email }).then((user) => {
      if (user) return res.status(400).json({ msg: "User already exists" });

      const newUser = new User({
        name,
        email,
        password,
      });

      //create bcrypt salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            jwt.sign(
              { id: user.id },
              jwtSecret,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                  },
                });
              }
            );
          });
        });
      });
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
