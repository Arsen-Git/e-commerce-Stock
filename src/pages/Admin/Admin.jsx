import "./style.scss";
import "../../global.scss";

import { useState, useEffect } from "react";

import MarketList from "../../components/marketList/MarketList";
import OrderList from "../../components/ordersList/OrderList";

export default function Admin() {
  const [type, setType] = useState("products");

  const changeType = (e) => {
    setType(e.target.getAttribute("id"));
  };

  return (
    <main className="admin">
      <ul className="admin__menu">
        <li
          onClick={changeType}
          id="products"
          className={
            type === "products"
              ? "admin__menu__item-active"
              : "admin__menu__item"
          }
        >
          Товари
        </li>
        <li
          onClick={changeType}
          id="orders"
          className={
            type === "orders" ? "admin__menu__item-active" : "admin__menu__item"
          }
        >
          Замовлення
        </li>
      </ul>
      <h2 className="section__title">
        {type === "products" ? "Товари" : "Замовлення"}
      </h2>
      {type === "products" ? <MarketList type={"admin"} /> : <OrderList />}
    </main>
  );
}
