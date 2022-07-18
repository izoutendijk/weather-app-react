import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import Date from "./Date";
import TempButton from "./TempButton";
import TempCurrent from "./TempCurrent";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";

export default function Weather(props) {
  let apiKey = "a68381d4faf2a13b11b7dc8945964fc7";
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWeather(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: response.data.dt * 1000,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed * 3.6),
      unitWind: "km/h",
      humidity: response.data.main.humidity,
      uvIndex: "null",
    });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    if (city.length > 0) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(handleWeather);
    } else {
      alert("Enter a city please!");
    }
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Date date={weatherData.date} />
        <TempButton />

        <form id="search-bar" onSubmit={handleSubmit}>
          <div className="row g-3 inputCityBar">
            <div className="col-auto">
              <i className="fa-solid fa-magnifying-glass" id="searchButton"></i>
            </div>
            <div className="col-auto">
              <input
                type="search"
                id="inputCity"
                className="form-control"
                placeholder="Enter a city here"
                autoFocus="on"
                onChange={changeCity}
              />
            </div>
          </div>
        </form>
        <button type="button" className="btn btn-link currentLoc">
          Current Location
        </button>
        <div className="tempCurrent">
          <span className="tempValue"></span>
          <span id="units"></span>
        </div>

        <TempCurrent data={weatherData} />
        <CurrentCity data={weatherData} />
        <Forecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading.....";
  }
}
