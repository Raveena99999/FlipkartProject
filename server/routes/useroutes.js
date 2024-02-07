const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/usermodel");
const bcrypt = require("bcrypt");
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
const refreshTokenKey = process.env.REFRESH_TOKEN_KEY;
const jwt = require("jsonwebtoken");
const { BlacklistUserModel } = require("../models/Blacklistmodel");
const { auth } = require("../middlewares/Authmiddleware");
const cookieParser = require("cookie-parser");
userRouter.post("/register", async (req, res) => {
  try {
    const { password } = req.body;
    console.log(req.body);
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        res.status(400).send({ msg: err.message });
      } else {
        const user = new UserModel({ ...req.body, password: hash });
        await user.save();
        res.status(200).send({ msg: "You are register successfully" });
      }
    });
  } catch (error) {
    res.send({ err: "error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        throw new Error("Incorrect password");
      }
      var accessToken = jwt.sign({ email, userId: user._id }, accessTokenKey, {
        expiresIn: 120,
      });
      var refreshToken = jwt.sign(
        { email, userId: user._id },
        refreshTokenKey,
        {
          expiresIn: 180,
        }
      );
      res.cookie("accessToken", accessToken);
      res.cookie("refreshToken", refreshToken);
      res.status(200).send({
        msg: "Login Successful",
        token: accessToken,
        refreshToken: refreshToken,
      });
    }
  } catch (error) {
    res.status(500).send({ err:error.message });
  }
});

userRouter.get("/logout", auth, async (req, res) => {
  try {
    let accessToken = req.cookies["accessToken"];
    let refreshToken = req.cookies["refreshToken"];
    const blacklistedUserToken = new BlacklistUserModel({
      accessToken,
      refreshToken,
    });
    await blacklistedUserToken.save();
    console.log("user has been logged out")
    res.status(200).send({ msg: "User has been logged out" });
  } catch (error) {
    console.log("error",error)

    res.status(400).send({ error: error.message });
  }
});
module.exports = { userRouter };
