const router = require("express").Router();
const User = require("./../models/User");

//REGISTER
router.get("/register", async (req, res) => {
  const user = await new User({
    userName: "Bhopal",
    email: "bhopal.singh@gmail.com",
    password: "123456",
  });
  await user.save();
  res.send("OK");
});

module.exports = router;
