const { getByIdFactory,
    getAllFactory,
    createFactory,
    deleteByIdFactory } = require("../utility/crudFactory");
const UserModel = require("../model/UserModel");
const getAllUserHandler = getAllFactory(UserModel);
const createuserHandler = createFactory(UserModel);
const getUserById = getByIdFactory(UserModel);
const deleteUserById = deleteByIdFactory(UserModel);

module.exports = {
    getAllUserHandler, createuserHandler, getUserById, deleteUserById
}