import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../slices/orderSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const products = cart.map(item => ({ product: item._id, quantity: 1 }));
    dispatch(placeOrder({ products, totalPrice }));
    alert("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}

export default Checkout;
