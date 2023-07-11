import React, { useEffect, useState } from "react";
import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

const OrdersComponent = () => {
  const [orders, setOrders] = useState([]);

  const getOrdersByUserId = async () => {
    let uId = JSON.parse(localStorage.getItem("jwt")).user._id;
    try {
      let res = await axios.post(`${apiURL}/api/order/order-by-user`, {
        uId: uId,
      });
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdersByUserId();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Order Total: {order.total}</p>
          {/* Add more order details as needed */}
        </div>
      ))}
    </div>
  );
};

export default OrdersComponent;
