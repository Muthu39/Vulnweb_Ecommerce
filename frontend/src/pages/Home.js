import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our E-Commerce Store</h1>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      {/* Display Some Products */}
      <div className="products">
        <h2>Featured Products</h2>
        <div className="product">
          <Link to="/product/1">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <p>Product 1</p>
          </Link>
        </div>
        <div className="product">
          <Link to="/product/2">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <p>Product 2</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
