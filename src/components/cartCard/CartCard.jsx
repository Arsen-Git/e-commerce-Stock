import "./CartCard.scss";
import "../../global.scss";

import cartDel from "../../imgs/Cart/deletecon.svg";

import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../../pages/CartPage/cartSlice";

export default function CartCard({ type, item }) {
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <div className="cartCard__detail">
        <img src={item.img} alt="cartImg" className="cartCard__img" />
        <div className="cartCard__info">
          <h2 className="cartCard__title">{item.title}</h2>
          <p className="cartCard__text">Розмір: {item.size}</p>
        </div>
      </div>
      <p className="cartCard__price">{item.price}₴</p>
      {type === "cart" ? (
        <img
          onClick={() => dispatch(removeCartItem(item.id))}
          src={cartDel}
          alt="delete"
          className="cartCard__del"
        />
      ) : (
        <button
          onClick={() => dispatch(addCartItem(item))}
          className="btn btn-purple"
        >
          +
        </button>
      )}
    </div>
  );
}
