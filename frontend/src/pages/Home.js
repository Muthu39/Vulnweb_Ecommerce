import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importing CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our E-Commerce Store</h1>

      {/* Featured Products Section */}
      <h2>Featured Products</h2>
      <div className="products-grid">
        {[...Array(10)].map((_, index) => (
          <div key={index + 1} className="product">
            <Link to={`/product/${index + 1}`}>
              <img src="https://via.placeholder.com/150" alt={`Product ${index + 1}`} />
              <p>Product {index + 1}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
