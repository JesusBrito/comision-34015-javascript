import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    purchasePrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    date: { type: Date, required: false },
});


const ProductModel = mongoose.model('Product', ProductSchema);
export default ProductModel;