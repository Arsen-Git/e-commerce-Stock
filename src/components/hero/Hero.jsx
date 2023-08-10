import "./Hero.scss";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${require("../../imgs/Homepage/hero-bg.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="hero"
    >
      <div className="hero__content">
        <div className="hero__info">
          <h2 className="hero__text">Футболки / Топи</h2>
          {/*40-50 chars max lenght for title */}
          <h1 className="hero__title">Літній набір</h1>
          <h2 className="hero__text">свіжість / колір / комфорт</h2>
          <Link to={"/marketplace"}>
            <button className="btn btn-home-white">Купити</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
