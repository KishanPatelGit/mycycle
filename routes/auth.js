const express = require("express");
const router = express.Router();

const User = require("../models/User");

const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

// @route    GET api/auth
// @desc     Get logged in
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

// @route    POST api/auth
// @desc     Auth user & get Token
// @access   Public
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // const isMath = await bcrypt.compare(password, user.password);

    // if (!isMath) {
    //   return res.status(400).json({ msg: "Invalid Credentials" });
    // }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json("server error");
  }
});

module.exports = router;
