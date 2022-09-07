//import img from "../../../resources/media/l.png";
import "./ServicesScreen.scss";
import test from "../../../resources/media/2.jpg";

function Card(props) {
  return (
    <div className="card">
      <img src={test} className="card__img" alt="text" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <h3 className="card__price">{props.price}</h3>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
