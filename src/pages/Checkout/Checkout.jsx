import "./style.scss";
import "../../global.scss";

import { useSelector, useDispatch } from "react-redux";
import { clearCartItems } from "../CartPage/cartSlice";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import OrderModal from "../../components/orderModal/OrderModal";
import API from "../../utils/API";

import { motion } from "framer-motion";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [flat, setFlat] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [canPay, setCanPay] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const navigation = useNavigate();
  const { updateOrders } = new API();

  const { paymentAmount, items: cartItems } = useSelector(
    (state) => state.cart
  );
  const userInfo = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const onChangePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    if (paymentMethod === "Card") {
      navigation(`/payment`);
      sessionStorage.setItem(
        "order",
        JSON.stringify({
          paymentAmount,
          paymentMethod,
          name: `${name} ${surname}`,
          adress: `${city} ${street} ${flat} ${postCode}`,
          email,
          phone,
          orderId,
          cartItems,
        })
      );
    } else if (paymentMethod === "Cash") {
      updateOrders({
        paymentAmount,
        paymentMethod,
        name: `${name} ${surname}`,
        adress: `${city} ${street} ${flat} ${postCode}`,
        email,
        phone,
        orderId,
        cartItems,
      });
      dispatch(clearCartItems());
      handleModal();
    }
  };

  const onInputChange = (e) => {
    switch (e.target.getAttribute("id")) {
      case "name":
        setName(e.target.value);
        break;
      case "surname":
        setSurname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "street":
        setStreet(e.target.value);
        break;
      case "flat":
        setFlat(e.target.value);
        break;
      case "code":
        setPostCode(e.target.value);
        break;
      case "tel":
        setPhone(e.target.value);
        break;
      default:
        return 0;
    }
  };

  useEffect(() => {
    if (
      paymentMethod &&
      name &&
      surname &&
      email &&
      city &&
      street &&
      flat &&
      postCode &&
      phone &&
      paymentAmount
    ) {
      setCanPay(true);
    }
  }, [
    paymentMethod,
    name,
    surname,
    email,
    city,
    street,
    flat,
    postCode,
    phone,
    paymentAmount,
  ]);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.given_name);
      setSurname(userInfo.family_name);
      setEmail(userInfo.email);
    }
    setOrderId(Date.now());
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        className="section"
      >
        {modalOpen ? (
          <OrderModal id={orderId} handleModal={handleModal} />
        ) : null}
        <h2 className="section__title">Замовлення</h2>
        <form action="#">
          <div className="checkout__form-div">
            <div className="checkout__form-left">
              <p className="checkout__subtitle">Деталі замовлення</p>
              <div className="checkout__form" action="#">
                <div className="checkout__form__inputs">
                  <div className="checkout__form__item">
                    <label htmlFor="name">Ім'я*</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Taras"
                      value={name}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="checkout__form__item">
                    <label htmlFor="surname">Прізвище*</label>
                    <input
                      value={surname}
                      onChange={onInputChange}
                      type="text"
                      id="surname"
                      required
                      placeholder="Shevchenko"
                    />
                  </div>
                  <div className="checkout__form__item">
                    <label htmlFor="mail">Email*</label>
                    <input
                      value={email}
                      onChange={onInputChange}
                      type="email"
                      id="email"
                      required
                      placeholder="ukraine@ukr.net"
                    />
                  </div>
                  <div className="checkout__form__item">
                    <label htmlFor="city">Місто*</label>
                    <input
                      value={city}
                      onChange={onInputChange}
                      type="text"
                      id="city"
                      required
                      placeholder="New York"
                    />
                  </div>
                  <div className="checkout__form__item">
                    <label htmlFor="street">Вулиця*</label>
                    <input
                      value={street}
                      onChange={onInputChange}
                      type="text"
                      id="street"
                      required
                      placeholder="Nezalezhnosti"
                    />
                  </div>
                  <div className="checkout__form__item">
                    <label htmlFor="street">Квартира\Дім*</label>
                    <input
                      value={flat}
                      onChange={onInputChange}
                      type="text"
                      id="flat"
                      required
                      placeholder="61"
                    />
                  </div>
                  <div className="checkout__form__item">
                    <label htmlFor="code">Почтовий код*</label>
                    <input
                      value={postCode}
                      onChange={onInputChange}
                      type="text"
                      id="code"
                      required
                      placeholder="00-123"
                    />
                  </div>
                  <div className="checkout__form__item">
                    <label htmlFor="tel">Номер телефону*</label>
                    <input
                      value={phone}
                      onChange={onInputChange}
                      type="text"
                      id="tel"
                      required
                      placeholder="093 12 34 567"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout__form-right">
              <p className="checkout__subtitle">Деталі товару</p>
              <p className="checkout__form__price">
                Разом: <b>{paymentAmount}₴</b>
              </p>
            </div>
          </div>
          <h2 className="checkout__subtitle mt30">Спосіб оплати</h2>
          <div className="checkout__payment">
            <div className="checkout__payment__item">
              <input
                onClick={onChangePaymentMethod}
                type="radio"
                name="pay"
                id="card"
                value="Card"
              />
              <label htmlFor="card">Банківська картка</label>
            </div>
            <div className="checkout__payment__item">
              <input
                onClick={onChangePaymentMethod}
                type="radio"
                name="pay"
                id="cash"
                value="Cash"
              />
              <label htmlFor="cash">Оплата при отриманні</label>
            </div>
          </div>
          <button
            disabled={!canPay}
            onClick={submitOrder}
            type="submit"
            className="btn-purple"
          >
            {paymentMethod === "Card" ? "Оплатити карткою" : "Замовити"}
          </button>
        </form>
      </motion.section>
    </>
  );
}
