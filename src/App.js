import "./App.css";
import "./styles.css";

import Date from "./Date";
import TempButton from "./TempButton";
import SearchBar from "./SearchBar";
import TempCurrent from "./TempCurrent";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Date day="Saturday" hour={18} minutes="00" />
      <TempButton />
      <SearchBar />
      <TempCurrent />
      <CurrentCity />
      <Forecast />
    </div>
  );
}

export default App;
