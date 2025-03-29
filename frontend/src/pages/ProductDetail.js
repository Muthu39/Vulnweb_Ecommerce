import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-detail-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
