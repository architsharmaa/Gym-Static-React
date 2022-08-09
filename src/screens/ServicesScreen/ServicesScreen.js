import "./ServicesScreen.css";
import img from "../../../resources/media/owner.png";

const ServicesScreen = () => {
  return (
    <div className="card" id="service">
      <img src={img} alt="Avatar" style={{ width: 100 }} />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect Engineer</p>
      </div>
    </div>
  );
};

export default ServicesScreen;
