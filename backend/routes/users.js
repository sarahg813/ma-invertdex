const router = require("express").Router();
require("dotenv").config();
let User = require("../models/user.model");

//GET /users
//get all users
//private access
router.route("/").get(async (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
