const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../../controllers/authController/index");
const authticateMiddleware = require("../../middleware/auth_middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", authticateMiddleware, (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    message: "Authenticated User",
    data: {
      user,
    },
  });
});

module.exports = router;
