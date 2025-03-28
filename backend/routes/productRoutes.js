const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a New Product
router.post("/", async (req, res) => {
  try {
    const { name, description, price, image, stock } = req.body;
    const newProduct = new Product({ name, description, price, image, stock });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
