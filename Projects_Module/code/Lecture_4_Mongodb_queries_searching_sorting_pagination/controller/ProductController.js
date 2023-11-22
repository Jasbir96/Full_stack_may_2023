const ProductModel = require("../model/ProductModel");
const { createFactory, getAllFactory, getByIdFactory, deleteByIdFactory } = require("../utility/crudFactory");
/******************products************************/
const createProductHandler = createFactory(ProductModel);
const getAllProductHandler = getAllFactory(ProductModel);
const getProductById = getByIdFactory(ProductModel);
const deleteProductById = deleteByIdFactory(ProductModel);
module.export = {
    createProductHandler,
    getAllProductHandler,
    getProductById,
    deleteProductById
}