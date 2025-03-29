import { Link } from "react-router-dom";
import { useSelector } from "react-redux";  // Add this line


function Cart() {
  const cart = useSelector(state => state.cart.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      {cart.length > 0 && <Link to="/checkout"><button>Proceed to Checkout</button></Link>}
    </div>
  );
}

export default Cart;
