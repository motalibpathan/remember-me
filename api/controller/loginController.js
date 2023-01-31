// external imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// internal imports
const User = require("../model/User");

// get users page
async function getLogin(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const matched = await bcrypt.compare(req.body.password, user.password);
      if (matched) {
        const userData = user.toObject();
        delete userData.password;
        const token = jwt.sign(
          {
            userId: userData._id,
            email: userData.email,
            phone: userData.phone,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRY,
          }
        );
        res.send({ user: userData, token: token });
      } else {
        res.status(401).json({
          error: "Email or password was wrong!",
        });
      }
    } else {
      res.status(401).json({
        error: "User is not registered!",
      });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getLogin,
};
