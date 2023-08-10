import "./CartList.scss";

import CartCard from "../cartCard/CartCard";

export default function CartList({ type, items, wishlist }) {
  let viewedItems = null;

  if (type === "cart") {
    viewedItems = items.map((item, index) => (
      <CartCard type={type} key={index} item={item} />
    ));
  } else {
    viewedItems = wishlist.map((item, index) => (
      <CartCard type={type} key={index} item={item} />
    ));
  }
  return (
    <ul className={type === "cart" ? "cartList" : "cartList wish"}>
      {viewedItems}
    </ul>
  );
}
