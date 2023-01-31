// external imports
const express = require("express");

// internal imports
const {
  getUsers,
  getUser,
  addUser,
  removeUser,
} = require("../controller/usersController");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// users page
router.get("/", getUser);
router.get("/", checkLogin, getUsers);

// add user
router.post(
  "/",
  checkLogin,
  // avatarUpload,
  // addUserValidators,
  // addUserValidationHandler,
  addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;
