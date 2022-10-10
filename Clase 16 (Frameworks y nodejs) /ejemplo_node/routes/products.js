import express from "express";
import { getProducts } from "../controllers/products.js";

const api = express.Router();

api.get("/products", getProducts);

export default api;
