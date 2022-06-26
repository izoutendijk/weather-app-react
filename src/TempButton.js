import React from "react";
import "./TempButton.css";

export default function TempButton() {
  return (
    <div className="tempOption">
      <span className="tempCelsius active">ºC</span>
      <span className="separation"> | </span>
      <span className="tempFahrenheit">ºF</span>
    </div>
  );
}
