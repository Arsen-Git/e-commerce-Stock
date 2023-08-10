import "./OrderModal.scss";

import { useNavigate } from "react-router-dom";

export default function OrderModal({ handleModal = () => {}, id }) {
  const navigate = useNavigate();

  const onCloseModal = () => {
    handleModal();
    navigate("/home");
  };
  return (
    <div className="wrapper">
      <div className="modal__content">
        <div onClick={onCloseModal} className="modal__exit">
          X
        </div>
        <h2 className="modal__text">Дякуємо за замовлення!</h2>
        <p className="modal__text">Номер вашого замовлення: {id}</p>
        <p className="modal__text modal__text-thin">
          Ми вже будимо нашого комірника, щоб він почав приготування Вашого
          замовлення!{")"}
        </p>
      </div>
    </div>
  );
}
