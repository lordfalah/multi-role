import ash from "express-async-handler";
import { ServiceProduct } from "../service/product-service.js";

const getProduct = ash(async (req, res) => {
  try {
    const response = await ServiceProduct.getAll(req, res);
    return res.status(200).json(response);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getProductById = ash(async (req, res) => {
  try {
    const response = await ServiceProduct.getById(req, res);
    return res.status(200).json(response);
  } catch (error) {
    throw new Error(error.message);
  }
});

const createProduct = ash(async (req, res) => {
  try {
    await ServiceProduct.created(req, res);
    return res
      .status(201)
      .json({ message: `Success add product by : ${req.role}` });
  } catch (error) {
    throw new Error(error.message);
  }
});

const deleteProduct = ash(async (req, res) => {
  try {
    await ServiceProduct.deleted(req, res);
  } catch (error) {
    throw new Error(error.message);
  }

  return res.status(200).json({ message: "Product successfuly deleted" });
});

const updateProduct = ash(async (req, res) => {
  try {
    await ServiceProduct.updated(req, res);
  } catch (error) {
    throw new Error(error.message);
  }

  return res.status(200).json({ message: "Success update product" });
});

export {
  getProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
