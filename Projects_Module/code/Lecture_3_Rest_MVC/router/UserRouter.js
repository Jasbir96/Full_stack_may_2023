const express = require("express");
const UserRouter = express.Router();

/***********routes**************/
/**********users*****/
UserRouter.get("/", getAllUserHandler);
// chaining
UserRouter.post("/", checkInput, createuserHandler);
UserRouter.get("/:userId", getUserById);
UserRouter.delete("/:userId", deleteUserById);
module.exports = UserRouter;