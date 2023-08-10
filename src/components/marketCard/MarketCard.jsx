import "./MarketCard.scss";
import "../../global.scss";

import like from "../../imgs/Homepage/heart.svg";
import del from "../../imgs/ProductPage/delete.svg";
import update from "../../imgs/ProductPage/update.svg";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addWishlistItem } from "../../pages/CartPage/cartSlice";

import { useState, useEffect } from "react";

import API from "../../utils/API";

export default function MarketCard({ item, type = "user" }) {
  const [isLiked, setIsLiked] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTilte] = useState(item.title);
  const [price, setPrice] = useState(item.price);

  const likedItems = useSelector((state) => state.cart.wishlist);
  const dispatch = useDispatch();

  const { deleteProduct, updateProduct } = new API();

  const onLike = (e) => {
    e.target.parentNode.classList.add("like-liked");
    dispatch(addWishlistItem(item));
  };
  const onUpdate = (e) => {
    setIsUpdate(true);
  };
  const submitUpdate = () => {
    updateProduct({
      id: item.id,
      title,
      brand: item.brand,
      price,
      img: item.img,
      type: item.type,
      size: item.size,
    });
    setIsUpdate(false);
  };
  const onDelete = (e) => {
    const answer = prompt(
      `Введіть "так" якщо хочете видалити товар ${item.title}`
    );
    if (answer === "так") {
      e.target.parentNode.offsetParent.classList.add("deleted__product");
      e.target.parentNode.classList.add("deleted__btn");
      deleteProduct(item.id);
    }
  };

  useEffect(() => {
    setIsLiked(likedItems.findIndex((prod) => prod.title === item.title));
  }, []);

  return (
    <>
      <div className="market__card">
        {type === "user" && (
          <div
            onClick={onLike}
            className={isLiked >= 0 ? "like like-liked" : "like"}
          >
            <img src={like} alt="like" />
          </div>
        )}
        {type === "admin" && (
          <>
            <div onClick={onDelete} className="like">
              <img width={20} height={20} src={del} alt="del" />
            </div>
            <div onClick={onUpdate} className="like like-left">
              <img width={20} height={20} src={update} alt="update" />
            </div>
          </>
        )}
        <Link to={`/marketplace/${item.id}`}>
          <img className="market__card__img" src={item.img} alt="cardImg" />
          <div className="market__card__footer">
            <div className="market__card__footer-left">
              <h2 className="market__card__title">{title}</h2>
              <p className="market__card__subtitle">{item.brand}</p>
            </div>
            <div className="market__card__footer-right">
              <p className="market__card__price">{price}₴</p>
            </div>
          </div>
        </Link>
        {isUpdate ? (
          <>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTilte(e.target.value)}
            />
            <input
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={submitUpdate}>Ok</button>
          </>
        ) : null}
      </div>
    </>
  );
}
