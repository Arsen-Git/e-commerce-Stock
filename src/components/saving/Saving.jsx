import "./Saving.scss";
import "../../global.scss";

import arrow from "../../imgs/Homepage/arrow.svg";
import { Link } from "react-router-dom";

export default function Saving({ item }) {
  return (
    <div
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="saving"
    >
      <div className="saving__content">
        <h2 className="saving__title">{item.title}</h2>
        <p className="saving__subtitle">{item.tet}</p>
        <p className="saving__discont">Знижки до 40%</p>
        <img src={arrow} alt="arrow" />
        <Link to={"/marketplace"}>
          <button className="btn btn-home-black">Купити</button>
        </Link>
      </div>
    </div>
  );
}
