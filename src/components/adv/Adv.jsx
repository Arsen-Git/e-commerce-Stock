import { Link } from "react-router-dom";
import "./Adv.scss";

export default function Adv() {
  return (
    <div className="adv">
      <div
        style={{
          backgroundImage: `url(${require("../../imgs/Homepage/adv-left.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="adv-left"
      >
        <h2 className="adv__title">Ми робимо твій EVERYDAY стиль кращим</h2>
        <p className="adv__subtitle">
          У нашому прагненні покращити повсякденну моду, euphoria представляє
          лінійку одягу EVERYDAY - Комфортна та доступна мода 24/7
        </p>
        <Link to={"/marketplace"}>
          <button className="btn btn-home-white">Купити</button>
        </Link>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("../../imgs/Homepage/adv-right.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="adv-right"
      ></div>
    </div>
  );
}
