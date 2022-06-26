import React from "react";
import "./TempCurrent.css";

export default function CurrenCity(props) {
  let weatherData = {
    city: "Leiden",
    humidity: 75,
    wind: 25,
    unitWind: "km/h",
    UVindex: 3,
  };
  return (
    <div className="CurrentCity">
      <h2 className="city mb-1">{weatherData.city}</h2>
      <div className="row stats">
        <div className="col-1 empty"></div>
        <div className="col-3 humidity">Humidity: {weatherData.humidity}%</div>
        <div className="col-3 wind">
          Wind: {weatherData.wind}
          {weatherData.unitWind}
        </div>
        <div className="col-3 uvindex">UV-index: {weatherData.UVindex}</div>
        <div className="col-1 empty"></div>
      </div>
    </div>
  );
}
