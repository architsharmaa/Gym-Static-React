import "./BmiScreen.css";
import { useState } from "react";

const BmiScreen = () => {
  const [result, setResult] = useState("");

  function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);

    let weight = parseInt(document.querySelector("#weight").value);
    console.log(height);
    console.log(weight);

    if (height === "" || isNaN(height)) setResult("Provide a valid Height!");
    else if (weight === "" || isNaN(weight))
      setResult("Provide a valid Weight!");
    // If both input is valid, calculate the bmi
    else {
      // Fixing upto 2 decimal places
      let bmi = (weight / ((height * height) / 10000)).toFixed(2);

      // Dividing as per the bmi conditions
      if (bmi < 18.6) setResult("Under Weight : " + bmi);
      else if (bmi >= 18.6 && bmi < 24.9) setResult("Normal : " + bmi);
      else setResult("Over Weight : " + bmi);
    }
  }
  return (
    <div id="bmi" className="bmi-container">
      <h1 className="bmi-heading">BMI Calculator</h1>
      <hr />

      <span className="theory">
        Body mass index (BMI) is a value derived from the mass (weight) and
        height of a person. The BMI is defined as the body mass divided by the
        square of the body height, and is expressed in units of kg/m2, resulting
        from mass in kilograms and height in metres.
      </span>
      <br />
      <p className="bmi-labels">Height (in cm)</p>

      <input type="text" id="height" className="bmi-input" />

      <p className="bmi-labels">Weight (in kg)</p>

      <input type="text" id="weight" className="bmi-input" />

      <br />
      <br />
      {result.length > 0 && <div className="result">{result}</div>}
      <button id="btn" onClick={calculateBMI}>
        Calculate
      </button>

      <div id="bmi-result"></div>
    </div>
  );
};

export default BmiScreen;
