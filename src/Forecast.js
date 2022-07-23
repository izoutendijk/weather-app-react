import React, { useState } from "react";
import "./Forecast.css";
import ForecastDays from "./ForecastDays";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data.list);
    setForecast(response.data.list);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ForecastDays data={forecast[0]} unit="C" />
        <ForecastDays data={forecast[1]} unit="C" />
        <ForecastDays data={forecast[2]} unit="C" />
        <ForecastDays data={forecast[3]} unit="C" />
      </div>
    );
  } else {
    let apiKey = "a68381d4faf2a13b11b7dc8945964fc7";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
