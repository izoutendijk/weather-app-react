import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastDays(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "CLOUDY",
    "02n": "CLOUDY",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "PARTLY_CLOUDY_DAY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = (new Date(props.data.dt)).getDay();

  return (
    <div className="row align-items-center forecastEl">
      <div className="col-2 day">{days[day]}</div>
      <div className="col-1 weather">
        <ReactAnimatedWeather
          icon={iconMapping[props.data.weather[0].icon]}
          color="#dfb228"
          size={30}
          animate={true}
        />
      </div>
      <div className="col-2 tempMinMax">
        <span id="min-value">
          Min: {Math.round(props.data.main.temp_min)}º{props.unit}
        </span>
        <br />
        <span id="max-value">
          Max: {Math.round(props.data.main.temp_max)}º{props.unit}
        </span>
      </div>
      <div className="col-6 description">
        {props.data.weather[0].description}
      </div>
    </div>
  );
}
