const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/vuln_ecommerce", { useNewUrlParser: true, useUnifiedTopology: true });

const sampleProducts = [
  {
    name: "Apple iPhone 15 Pro",
    description: "The latest iPhone with A17 Bionic chip.",
    price: 1299,
    image: "https://source.unsplash.com/300x300/?iphone",
    category: "Electronics",
    stock: 10,
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    description: "Powerful Android flagship phone.",
    price: 1199,
    image: "https://source.unsplash.com/300x300/?samsung",
    category: "Electronics",
    stock: 15,
  },
  {
    name: "Nike Air Max 270",
    description: "Comfortable and stylish sneakers.",
    price: 150,
    image: "https://source.unsplash.com/300x300/?shoes",
    category: "Fashion",
    stock: 20,
  },
  {
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise canceling headphones.",
    price: 399,
    image: "https://source.unsplash.com/300x300/?headphones",
    category: "Electronics",
    stock: 8,
  },
  {
    name: "MacBook Pro M2",
    description: "16-inch MacBook Pro with M2 Pro chip.",
    price: 2499,
    image: "https://source.unsplash.com/300x300/?macbook",
    category: "Electronics",
    stock: 5,
  },
  {
    name: "Canon EOS R5",
    description: "Professional mirrorless camera with 8K video recording.",
    price: 3799,
    image: "https://source.unsplash.com/300x300/?camera",
    category: "Electronics",
    stock: 7,
  },
  {
    name: "Adidas Ultraboost 23",
    description: "High-performance running shoes.",
    price: 180,
    image: "https://source.unsplash.com/300x300/?adidas",
    category: "Fashion",
    stock: 12,
  },
  {
    name: "The North Face Jacket",
    description: "Waterproof and windproof winter jacket.",
    price: 250,
    image: "https://source.unsplash.com/300x300/?jacket",
    category: "Fashion",
    stock: 10,
  },
  {
    name: "Samsung 55-inch QLED TV",
    description: "4K Smart TV with Quantum Dot technology.",
    price: 899,
    image: "https://source.unsplash.com/300x300/?tv",
    category: "Electronics",
    stock: 6,
  },
  {
    name: "Logitech MX Master 3S",
    description: "Advanced ergonomic wireless mouse.",
    price: 99,
    image: "https://source.unsplash.com/300x300/?mouse",
    category: "Accessories",
    stock: 25,
  },
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("Sample Products Added!");
  mongoose.connection.close();
};

seedDB();
