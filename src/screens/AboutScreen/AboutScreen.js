import "./AboutScreen.css";

import Owner from "./OwnerAbout";
import Trainers from "./TrainerAbout";

const AboutScreen = () => {
  return (
    <div className="about-container" id="about">
      <span className="intro-heading">The Crew</span> <br />
      <Owner />
      <Trainers />
    </div>
  );
};

export default AboutScreen;
