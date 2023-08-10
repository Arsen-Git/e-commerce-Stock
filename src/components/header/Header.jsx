import "../../pages/SignPage/style.scss";
import "./Header.scss";

import logo from "../../imgs/Sign/Logo.png";
import search from "../../imgs/Sign/search.svg";
import like from "../../imgs/Homepage/heart.svg";
import cart from "../../imgs/Homepage/cart.svg";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter, changeFilterTitle } from "./filterSlice";
import { changeCartType } from "../../pages/CartPage/cartSlice";

export default function Header() {
  const activeFilter = useSelector((state) => state.activeFilter.type);
  const inputValue = useSelector((state) => state.activeFilter.title);

  const dispatch = useDispatch();

  const links = [
    { text: "Вітрина", active: true, type: "all" },
    { text: "Чоловічий", active: false, type: "men" },
    { text: "Жіночий", active: false, type: "women" },
    { text: "Універсальний", active: false, type: "uni" },
  ];

  const changeLink = (e) => {
    const link = links.find((link) => link.text === e.target.textContent);
    dispatch(changeActiveFilter(link.type));
  };

  const onInput = (e) => {
    dispatch(changeFilterTitle(e.target.value));
  };

  return (
    <header className="header">
      <Link to={"/home"}>
        <img
          className="header__logo"
          width={91}
          height={45}
          src={logo}
          alt="logo"
        />
      </Link>
      <ul className="header__menu">
        {links.map((link, index) => (
          <Link key={index} to={"/marketplace"}>
            <li
              onClick={changeLink}
              className={
                link.type === activeFilter
                  ? "header__menu__item header__menu__item-active"
                  : "header__menu__item"
              }
            >
              {link.text}
            </li>
          </Link>
        ))}
      </ul>
      <div className="header__search">
        <img className="header__search-img" src={search} alt="search" />
        <input
          onChange={onInput}
          value={inputValue}
          className="header__search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Пошук"
        />
      </div>
      <div className="header__user">
        <Link to={"/cart"}>
          <div
            onClick={() => dispatch(changeCartType("like"))}
            className="header__user__item"
          >
            <img src={like} alt="user-like" />
          </div>
        </Link>
        <Link to={"/cart"}>
          <div
            onClick={() => dispatch(changeCartType("cart"))}
            className="header__user__item"
          >
            <img src={cart} alt="user-cart" />
          </div>
        </Link>
      </div>
    </header>
  );
}
