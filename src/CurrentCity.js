import React from "react";
import "./TempCurrent.css";

export default function CurrenCity(props) {
  return (
    <div className="CurrentCity">
      <h2 className="city mb-1">{props.data.city}</h2>
      <div className="row stats">
        <div className="col-1 empty"></div>
        <div className="col-3 humidity">Humidity: {props.data.humidity}%</div>
        <div className="col-3 wind">
          Wind: {props.data.wind} {props.data.unitWind}
        </div>
        <div className="col-3 uvindex">Pressure: {props.data.pressure} hPA</div>
        <div className="col-1 empty"></div>
      </div>
    </div>
  );
}
