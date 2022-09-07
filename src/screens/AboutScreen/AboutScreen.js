import { useState } from "react";

import "./AboutScreen.css";
import MetaData from "../../../resources/Meta-Data/Meta-Data.json";

import Owner from "./OwnerAbout";
import Trainers from "./TrainerAbout";

const AboutScreen = () => {
  const [knowmore, setknowmore] = useState(false);

  const expand = () => {
    setknowmore((current) => !current);
  };

  return (
    <div className="about-container" id="about">
      <h1 className="intro-heading">The Crew</h1>
      <hr className="hrTest" />
      <span className="intro-about">{MetaData.definationIntros.theCrew}</span>
      <br />
      <button id="btn" onClick={expand}>
        Show More
      </button>
      {knowmore && (
        <>
          <Owner />
          <Trainers />
        </>
      )}
    </div>
  );
};

export default AboutScreen;
