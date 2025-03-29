import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/orders", { headers: { Authorization: `Bearer ${token}` } })
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length === 0 ? <p>No orders yet.</p> : orders.map(order => (
        <div key={order._id}>
          <h3>Order #{order._id}</h3>
          <p>Total Price: ${order.totalPrice}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
