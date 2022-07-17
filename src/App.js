import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <div class="source-comment">
          <a
            class="source-code btn-link"
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
