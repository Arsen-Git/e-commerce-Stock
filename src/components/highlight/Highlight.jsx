import { Link } from "react-router-dom";
import "./Highlight.scss";
import "../../global.scss";

export default function Highlight({ item }) {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${item.img})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      className="highlight"
    >
      <img className="highlight__img" src={item.img} alt="highlight" />
      <p className="highlight__text">Низька ціна</p>
      {/*40-50 chars max lenght for title*/}
      <h2 className="highlight__title">{item.text}</h2>
      <p className="highlight__subtitle">Знижки до 50%</p>
      <Link to={"/marketplace"}>
        <p className="highlight__btn">Знайти речі</p>
      </Link>
    </div>
  );
}
