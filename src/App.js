import "./App.css";
import Search from "./components/search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY} from "./fetchAPI.js"
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { useState } from "react";

function App() {

const [currentWeatherData, setCurrentWeatherData] = useState(null);
console.log(currentWeatherData)

  const handleOnSearchChange = async (searchData) => {
    // console.log(searchData);
    const [lat, lon] = searchData.value.split(" ")

    //fetch weather
    const currentWeather = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const currentWeatherData = await currentWeather.json()
    setCurrentWeatherData(currentWeatherData)

  };

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeatherData && <CurrentWeather data={currentWeatherData}/>}
    </div>
  );
}

export default App;
