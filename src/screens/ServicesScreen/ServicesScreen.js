import "./ServicesScreen.css";
import Card from "./Card";
import "./ServicesScreen.scss";
import Subscription from "../../../resources/Meta-Data/Subscription.json";

function ServicesScreen() {
  return (
    <div className="wrapper">
      {Object.values(Subscription).map((item, index) => (
        <Card
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.Category}
        />
      ))}
    </div>
  );
}

export default ServicesScreen;
