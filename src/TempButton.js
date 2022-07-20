import React, { useState } from "react";
import "./TempButton.css";

export default function TempButton() {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="tempOption">
        <span className="tempCelsius active">ºC</span>
        <span className="separation"> | </span>
        <span className="tempFahrenheit" onClick={showFahrenheit}>
          ºF
        </span>
      </div>
    );
  } else {
    return (
      <div className="tempOption">
        <span className="tempCelsius" onClick={showCelsius}>
          ºC
        </span>
        <span className="separation"> | </span>
        <span className="tempFahrenheit active">ºF</span>
      </div>
    );
  }
}
