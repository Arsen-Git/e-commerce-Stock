import "./Category.scss";
import "../../global.scss";

import { Link } from "react-router-dom";

export default function Category({ item }) {
  return (
    <div className="category">
      <img className="category__img" src={item.img} alt="image" />
      <div className="category__footer">
        <p className="category__title">{item.text}</p>
        <Link to={"/marketplace"}>
          <p className="category__explore">Знайти!</p>
        </Link>
      </div>
    </div>
  );
}
