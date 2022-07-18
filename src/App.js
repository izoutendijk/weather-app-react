import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Leiden" />
        <div className="source-comment">
          <a
            className="source-code btn-link"
            href="https://github.com/izoutendijk/weather-app-react"
            target="_blanks"
          >
            Open-source code
          </a>{" "}
          by Iris Zoutendijk
        </div>
      </div>
    </div>
  );
}
