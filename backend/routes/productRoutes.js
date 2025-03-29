const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
});

// Add a new product (Admin Only)
router.post("/", async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    const newProduct = new Product({ name, description, price, image, category, stock });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
});

module.exports = router;
