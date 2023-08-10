import "./style.scss";
import "../../global.scss";
import "../Page404/Page404.scss";

import CartList from "../../components/cartList/CartList";

import cartEmptyImg from "../../imgs/Cart/cartEmpty.png";
import wishEmptyImg from "../../imgs/Cart/wishEmpty.png";

import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setPaymentAmount } from "./cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.cart.wishlist);
  const cartType = useSelector((state) => state.cart.type);

  const dispatch = useDispatch();

  let cartPrice = cartItems.reduce((acc, item) => (acc += +item.price), 0);
  const delivery = 100;

  let view = null;

  if (
    cartType === "cart" &&
    cartItems.length === 0 &&
    wishlistItems.length !== 0
  ) {
    view = <EmptyView type={cartType} />;
  } else if (
    cartType === "like" &&
    wishlistItems.length === 0 &&
    cartItems.length !== 0
  ) {
    view = <EmptyView type={cartType} />;
  } else if (
    (cartType === "like" || cartType === "cart") &&
    wishlistItems.length === 0 &&
    cartItems.length === 0
  ) {
    view = <EmptyView type={cartType} />;
  } else {
    view = (
      <>
        <ul className="cart__menu">
          <li className="cart__menu__item cart__menu__item-active">
            {cartType === "cart" ? `Ваша корзина` : "Ваші збережені товари"}
          </li>
        </ul>
        <div className="cart__head">
          <ul className="cart__head__content">
            <li className="cart__head__item">Назва товару</li>
            <li className="cart__head__item">Ціна</li>
            <li className="cart__head__item">Взаємодія</li>
          </ul>
        </div>
        <CartList items={cartItems} wishlist={wishlistItems} type={cartType} />
        {cartType === "cart" ? (
          <div className="cart__footer">
            <div className="cart__footer__content">
              <div className="cart__footer-section">
                <h2 className="cart__footer__title cart__footer__title-bold">
                  Знижковий код
                </h2>
                <p className="cart__footer__text">
                  Введіть код знижкового купона
                </p>
                <div className="cart__footer__input-div">
                  <input type="text" className="cart__footer__input" />
                  <button className="btn btn-purple">Прийняти купон</button>
                </div>
              </div>
              <div className="cart__footer-section">
                <h2 className="cart__footer__title">Всього: {cartPrice}₴</h2>
                <h2 className="cart__footer__title">Доставка: {delivery}₴</h2>
                <h2 className="cart__footer__title cart__footer__title-bold">
                  Разом: {cartPrice + delivery}₴
                </h2>
                <Link to={"/order"}>
                  <button
                    onClick={() =>
                      dispatch(setPaymentAmount(cartPrice + delivery))
                    }
                    className="btn btn-purple"
                  >
                    Перейти до замовлення
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      {view}
    </motion.div>
  );
}

const EmptyView = ({ type }) => {
  const navigate = useNavigate();
  return (
    <>
      {type === "cart" ? (
        <div className="error">
          <img src={cartEmptyImg} alt="error" />
          <h1 className="error__title">Твоя корзина пуста і сумна {`:(`}</h1>
          <h2 className="error__subtitle">
            Додай щось, щоб зробити її щасливою!
          </h2>
          <button
            onClick={() => navigate("/marketplace")}
            className="btn btn-purple"
          >
            Продовжити покупки
          </button>
        </div>
      ) : (
        <div style={{ marginTop: "104px" }} className="error">
          <img src={wishEmptyImg} alt="error" />
          <h1 className="error__title">Твій список збережених пустий.</h1>
          <h2 className="error__subtitle">
            В тебе щє немає збережених товарів. Ти знайдеш багато цікавих
            товарів на нашому маркетплейсі
          </h2>
          <button
            onClick={() => navigate("/marketplace")}
            className="btn btn-purple"
          >
            Продовжити покупки
          </button>
        </div>
      )}
    </>
  );
};
