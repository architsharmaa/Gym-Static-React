//import React from "react";
import { render } from "react-dom";
import { StrictMode } from "react";
import App from "./App";

const Index = () => {
  return (
    <StrictMode>
     <App />
    </StrictMode>
  );
};

render(<Index />, document.getElementById("root"));