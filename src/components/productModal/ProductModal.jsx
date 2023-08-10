import "./ProductModal.scss";
import "../orderModal/OrderModal.scss";

import API from "../../utils/API";

import { useState } from "react";

export default function ProductModal() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("S");
  const [type, setType] = useState("men");
  const [error, setError] = useState(false);

  const { addProduct } = new API();

  const onInput = (e) => {
    setError(false);
    switch (e.target.getAttribute("id")) {
      case "img":
        setUrl(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;
      case "brand":
        setBrand(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      default:
        return 0;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (url && title && brand && price) {
      addProduct({ img: url, title, brand, price, size, type });
      e.target.classList.add("animate");
      setUrl("");
      setTitle("");
      setBrand("");
      setPrice("");
      setTimeout(() => {
        e.target.classList.remove("animate");
      }, 1001);
    } else {
      setError(true);
    }
  };
  return (
    <form className="productModal">
      <h2 className="productModal__title">Додати новий продукт</h2>
      <div className="productModal__input">
        <label htmlFor="img">Google Disc зображення</label>
        <input onChange={onInput} type="text" name="img" id="img" value={url} />
      </div>
      <div className="productModal__input">
        <label htmlFor="title">Назва</label>
        <input
          onChange={onInput}
          type="text"
          name="title"
          id="title"
          value={title}
        />
      </div>
      <div className="productModal__input">
        <label htmlFor="brand">Бренд</label>
        <input
          onChange={onInput}
          type="text"
          name="brand"
          id="brand"
          value={brand}
        />
      </div>
      <div className="productModal__input">
        <label htmlFor="price">Ціна</label>
        <input
          onChange={onInput}
          type="number"
          name="price"
          id="price"
          value={price}
        />
      </div>
      <div className="productModal__input">
        <label htmlFor="size">Розмір</label>
        <select onChange={(e) => setSize(e.target.value)} name="size" id="size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="productModal__input">
        <label htmlFor="gender">Тип</label>
        <select
          onChange={(e) => setType(e.target.value)}
          name="gender"
          id="gender"
        >
          <option value="men">Чоловічий</option>
          <option value="women">Жіночий</option>
          <option value="uni">Універсальний</option>
        </select>
      </div>
      <button type="submit" onClick={onSubmit} className="btn-purple">
        Ок
      </button>
      {error && <p style={{ color: "red" }}>Не всі поля заповнені!</p>}
    </form>
  );
}
