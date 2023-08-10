import "./MarketFilter.scss";

import filter from "../../imgs/Market/filter.svg";

import { useSelector, useDispatch } from "react-redux";
import { changeFilterSize } from "../header/filterSlice";

export default function MarketFilter() {
  const choosenSize = useSelector((state) => state.activeFilter.size);
  const dispatch = useDispatch();

  const onChangeSize = (e) => {
    dispatch(changeFilterSize(e.target.textContent));
  };

  const filters = [
    { name: "Топи" },
    { name: "Футболки" },
    { name: "Куртки" },
    { name: "Піжами" },
    { name: "Джинси" },
  ];
  const sizes = [
    { name: "All" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "XXL" },
  ];

  return (
    <>
      <aside className="filter">
        <div className="filter__head">
          <h2 className="filter__title">Фільтр</h2>
          <img src={filter} alt="filter" />
        </div>
        <ul className="filter__list">
          {filters.map((filter, index) => (
            <li key={index} className="filter__list__item">
              {filter.name}
            </li>
          ))}
        </ul>
        <h2 className="filter__title">Розмір</h2>
        <ul className="filter__sizes">
          {sizes.map((size, index) => (
            <li
              onClick={onChangeSize}
              key={index}
              className={
                choosenSize === size.name
                  ? "filter__sizes__item filter__sizes__item-active"
                  : "filter__sizes__item"
              }
            >
              {size.name}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
