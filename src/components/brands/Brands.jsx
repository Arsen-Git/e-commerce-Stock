import "./Brands.scss";

import nike from "../../imgs/Homepage/nike.png";
import hm from "../../imgs/Homepage/hm.png";
import levis from "../../imgs/Homepage/levis.png";
import polo from "../../imgs/Homepage/polo.png";
import puma from "../../imgs/Homepage/puma.png";

export default function Brands() {
  const brands = [nike, hm, levis, polo, puma];
  return (
    <div className="brands">
      <h2 className="brands__title">Топові бренди партнери</h2>
      <p className="brands__subtitle">
        До <span className="brands__gold">60%</span> знижок на бренди
      </p>
      <ul className="brands__list">
        {brands.map((brand, index) => (
          <li key={index} className="brands__list__item">
            <img src={brand} alt="brand" />
          </li>
        ))}
      </ul>
    </div>
  );
}
