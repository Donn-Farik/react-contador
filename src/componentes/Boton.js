import React from "react";
import "../stylesheet/boton.css";

function Boton({ text, isClickOrReset, clickButton }) {
  return (
    <button className={isClickOrReset ? "click" : "rest"} onClick={clickButton}>
      {text}
    </button>
  );
}
export default Boton;
