import { useEffect, useState } from "react";

import API from "../../utils/API";
import OrderModal from "../orderModal/OrderModal";

import { useDispatch } from "react-redux";
import { clearCartItems } from "../../pages/CartPage/cartSlice";

export default function Ordered() {
  const [orderId, setOrderId] = useState(null);

  const dispatch = useDispatch();
  const { updateOrders } = new API();

  const updateOrder = async () => {
    const order = await JSON.parse(sessionStorage.getItem("order"));
    setOrderId(order.orderId);
    updateOrders(order);
    dispatch(clearCartItems());
  };

  useEffect(() => {
    updateOrder();
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <OrderModal id={orderId} />
    </div>
  );
}
