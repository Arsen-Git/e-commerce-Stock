import "./style.scss";
import "../../global.scss";

import MarketList from "../../components/marketList/MarketList";
import API from "../../utils/API";

import starFull from "../../imgs/Homepage/star-full.svg";
import starEmpty from "../../imgs/Homepage/star-empty.svg";
import payment from "../../imgs/ProductPage/payment.svg";
import sizeAndFit from "../../imgs/ProductPage/sizeandfit.svg";
import shipping from "../../imgs/ProductPage/shiping.svg";
import returns from "../../imgs/ProductPage/returns.svg";
import Spinner from "../../components/loading/Loading";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../CartPage/cartSlice";

import { motion } from "framer-motion";

export default function ProductPage() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(-1);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const param = useParams();

  const { getMarketplaceProductById } = new API();

  const rate = [1, 1, 1, 1, 1];

  const fetchingItem = async (id) => {
    setLoading(true);
    const data = await getMarketplaceProductById(id);
    itemFetched(data);
  };

  const itemFetched = (fetchedData) => {
    setItem(fetchedData);
    setLoading(false);
    setAdded(cartItems.findIndex((prod) => prod.title === fetchedData.title));
  };

  const onAddToCard = (e) => {
    e.target.classList.remove("btn-purple");
    e.target.classList.add("btn-green");
    e.target.textContent = "Додано";
    dispatch(addCartItem(item));
  };

  useEffect(() => {
    fetchingItem(param.id);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [param.id]);
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        className="detail__container"
      >
        {loading && <Spinner />}
        {!loading && (
          <section className="detail">
            <div className="detail__left">
              <img src={item.img} alt="product" />
            </div>
            <div className="detail__right">
              <ul className="detail__nav">
                <li className="detail__nav__item">Вітрина</li>
                <li className="detail__nav__item">
                  {item.type === "men" ? "Чоловічий" : "Жіночий"}
                </li>
              </ul>
              <h1 className="detail__title">{item.title}</h1>
              <ul className="detail__stars">
                {rate.map((star, index) =>
                  star ? (
                    <li key={index}>
                      <img src={starFull} alt="star" />
                    </li>
                  ) : (
                    <li key={index}>
                      <img src={starEmpty} alt="star" />
                    </li>
                  )
                )}
                <li className="detail__stars__count">
                  {rate.filter((el) => el === 1).length}
                </li>
              </ul>
              <div className="detail__subtitle__container">
                <h2 className="detail__subtitle">Розмір</h2>
                <div className="detail__size">{item.size}</div>
              </div>
              <div className="detail__subtitle__container">
                <h2 className="detail__subtitle">Колір</h2>
                <div className="detail__size">Як на фото</div>
              </div>
              <div className="detail__btns">
                <button
                  onClick={onAddToCard}
                  className={added >= 0 ? "btn btn-green" : "btn btn-purple"}
                >
                  {added >= 0 ? "Додано" : "Додати в кошик"}
                </button>
                <div className="detail__price">{item.price}₴</div>
              </div>
              <div className="detail__benefits">
                <div className="detail__benefits__item">
                  <img src={payment} alt="payment" />
                  <p className="detail__benefits__text">Безпечна оплата</p>
                </div>
                <div className="detail__benefits__item">
                  <img src={sizeAndFit} alt="payment" />
                  <p className="detail__benefits__text">Якість товару</p>
                </div>
                <div className="detail__benefits__item">
                  <img src={shipping} alt="payment" />
                  <p className="detail__benefits__text">Швидка доставка</p>
                </div>
                <div className="detail__benefits__item">
                  <img src={returns} alt="payment" />
                  <p className="detail__benefits__text">Доступне повернення</p>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="section">
          <h2 className="section__title detail__section__title">
            Опис продукту
          </h2>
          <p className="detail__description">
            100% бавовна біо-прання - робить тканину надзвичайно м'якою та
            шовковистою. Гнучка ребриста горловина. Точно прошитий, без заломів
            та вицвітання. Забезпечує постійний комфорт. Завжди і всюди.
            Нескінченний вибір матових принтів з високою роздільною здатністю.
          </p>
        </section>
        <section className="section">
          <h2 className="section__title detail__section__title">
            Схожі товари
          </h2>
          {/* 10 products max */}
          <MarketList length={10} />
        </section>
      </motion.main>
    </>
  );
}
