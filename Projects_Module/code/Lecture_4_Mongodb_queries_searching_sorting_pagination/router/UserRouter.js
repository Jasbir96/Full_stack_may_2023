const express = require("express");
const UserRouter = express.Router();
const { getAllUserHandler, createuserHandler, getUserById, deleteUserById } = require("../controller/UserController")
/***********routes**************/
/**********users*****/
UserRouter.get("/", getAllUserHandler);
// chaining
UserRouter.post("/", checkInput, createuserHandler);
UserRouter.get("/:userId", getUserById);
UserRouter.delete("/:userId", deleteUserById);
module.exports = UserRouter;