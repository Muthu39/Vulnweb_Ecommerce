import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <div key={product._id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
