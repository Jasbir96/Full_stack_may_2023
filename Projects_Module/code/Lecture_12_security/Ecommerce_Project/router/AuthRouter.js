const express = require("express");
const { signupController, loginController, forgetPasswordController, resetPasswordController,
    logoutController
} =
    require("../controller/AuthController");
const AuthRouter = express.Router();

AuthRouter.post("/signup", signupController);
AuthRouter.post("/login", loginController);
AuthRouter.patch("/forgetpassword", forgetPasswordController);
AuthRouter.patch("/resetPassword/:userId", resetPasswordController);
AuthRouter.get("/logout",logoutController);
module.exports = AuthRouter;