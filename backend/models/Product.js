const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // Image URL
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  rating: { type: Number, default: 4.5 }, // Default rating
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
