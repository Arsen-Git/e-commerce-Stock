import "./Arrival.scss";
import "../../global.scss";

import { Link } from "react-router-dom";

export default function Arrival({ item }) {
  return (
    <div className="arrival">
      <Link to={"/marketplace"}>
        <img className="arrival__img" src={item.img} alt="product-arrival" />
      </Link>
      <p className="arrival__text">{item.text}</p>
    </div>
  );
}
