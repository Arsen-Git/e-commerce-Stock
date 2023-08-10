import "./OrderList.scss";

import { useState, useEffect } from "react";

import API from "../../utils/API";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  const { getAllOrders, changeOrderStatus } = new API();

  const fetchOrders = async () => {
    const fetchedOrders = await getAllOrders();
    setOrders(fetchedOrders);
  };

  const changeStatus = (order, e) => {
    const deliveryNumber = prompt("Номер відправлення:");
    if (deliveryNumber && deliveryNumber !== "") {
      order.deliveryNumber = deliveryNumber;
      changeOrderStatus(order);
      e.target.classList.add("btn-done");
      e.target.textContent = "Завершено!";
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <ul className="orderList">
      {orders.map((order) => (
        <div
          key={order.orderId}
          className={order.isDone ? "order order-done" : "order"}
        >
          <p className="order__text">
            ID: <b>{order.id}</b>
          </p>
          <p className="order__text">
            Сумма з доставкою: <b>{order.paymentAmount}</b>
          </p>
          <p className="order__text">
            Метод оплати: <b>{order.paymentMethod}</b>
          </p>
          <p className="order__text">
            Клієнт: <b>{order.client}</b>
          </p>
          <p className="order__text">
            Адресса доставки: <b>{order.adress}</b>
          </p>
          <p className="order__text">
            Email клієнта: <b>{order.email}</b>
          </p>
          <p className="order__text">
            Телефон: <b>{order.phone}</b>
          </p>
          <p className="order__text">
            Номер замовлення: <b>{order.orderId}</b>
          </p>
          <p className="order__text">
            Замовлений товар:{" "}
            <b>{order.orderItems.map((p) => p.title + ", ")}</b>
          </p>
          {order.deliveryNumber && (
            <p className="order__text">
              Номер відправлення: <b>{order.deliveryNumber}</b>
            </p>
          )}
          {order.isDone ? null : (
            <button onClick={(e) => changeStatus(order, e)}>Завершити</button>
          )}
        </div>
      ))}
    </ul>
  );
}
