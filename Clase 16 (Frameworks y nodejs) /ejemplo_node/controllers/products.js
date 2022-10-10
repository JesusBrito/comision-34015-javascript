import ProductModel from "../models/Product.js";

export async function getProducts(req, res) {
  try {
    let products = await ProductModel.find();
    res.status(200).send({ products: products });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
}
