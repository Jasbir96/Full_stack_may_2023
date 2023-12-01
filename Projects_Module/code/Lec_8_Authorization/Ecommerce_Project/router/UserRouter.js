const express = require("express");
const UserRouter = express.Router();
const { getAllUserHandler, createuserHandler, getUserById, deleteUserById } = require("../controller/UserController")
const { checkInput } = require("../controller/middleWares");
const { protectRouteMiddleWare, isAdminMiddleWare } = require("../controller/AuthController");
/***********routes**************/
/**********users*****/
UserRouter.use(protectRouteMiddleWare);

UserRouter.get("/", isAdminMiddleWare, getAllUserHandler);

// chaining
UserRouter.post("/", checkInput, isAdminMiddleWare,createuserHandler);
UserRouter.get("/:userId", getUserById);
UserRouter.delete("/:userId", isAdminMiddleWare,deleteUserById);
module.exports = UserRouter;