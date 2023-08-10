import "./Feedback.scss";

import starFull from "../../imgs/Homepage/star-full.svg";
import starEmpty from "../../imgs/Homepage/star-empty.svg";

export default function Feedback({ item }) {
  return (
    <div className="feedback">
      <div className="feedback__head">
        <h2 className="feedback__name">{item.name}</h2>
        <div className="feedback__stars">
          {item.rate.map((star, index) => {
            if (star) return <img key={index} src={starFull} alt="full" />;
            return <img key={index} src={starEmpty} alt="empty" />;
          })}
        </div>
      </div>
      <p className="feedback__text">
        {item.text.length > 100 ? item.text.slice(0, 100) + "..." : item.text}
      </p>
    </div>
  );
}
