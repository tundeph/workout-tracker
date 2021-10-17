const router = require("express").Router();
let User = require("../models/user.model");

//to list users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

//to login
router.route("/login").post((req, res) => {
  User.find({
    email: req.body.email,
    password: req.body.password,
  })
    .then((users) => res.json(users[0]))
    .catch((err) => res.status(400).json("Error:" + err));
});

//to check whether logged in
router.route("/auth").post((req, res) => {
  User.find({
    _id: req.body.token,
  })
    .then((users) => res.json(users[0]))
    .catch((err) => res.status(400).json("Error:" + err));
});

//to add users
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const newUser = new User({ username, email, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
