const express = require("express");
const Order = require("../models/Order");
const authMiddleware = require("../middleware/authMiddleware");



const router = express.Router();

// Place an order
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { products, totalPrice } = req.body;
    const order = new Order({ user: req.user.id, products, totalPrice });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Error creating order" });
  }
});

// Get user orders
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});

module.exports = router;
