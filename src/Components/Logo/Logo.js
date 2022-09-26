import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{ height: "150px", width: "150px" }}
        options={{ max: 25 }}
      >
        <div className="inner-Tilt pa2">
          <img src={brain} style={{ paddingTop: "5px" }} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
