const express = require("express");
const { signupController, loginController, forgetPasswordController, resetPasswordController, } =
    require("../controller/AuthController");
const AuthRouter = express.Router();

AuthRouter.post("/signup", signupController);
AuthRouter.post("/login", loginController);
AuthRouter.patch("/forgetpassword", forgetPasswordController);
AuthRouter.patch("/resetPassword/:userId", resetPasswordController);

module.exports = AuthRouter;