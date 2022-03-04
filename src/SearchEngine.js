import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function SearchEngine(props) { 
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defualtcity)

function handleResponse(response) {
  setWeatherData ({
  ready: true,
  city: response.data.name,
  time: new Date(response.data.dt * 1000),
  description: response.data.weather[0].description,
  temp: response.data.main.temp,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  });
 
}

function search(){
  const apiKey = "c403a9e2a5c07086f36f15c109e2369a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
   event.preventDefault();
    search();
}

function handleCityChange(event){
   setCity(event.target.value);

}

if (weatherData.ready){

return (
    <div class="searchengine">
      <form onSubmit={handleSubmit}>
        <img src="./icons/global-warming.png" width="90px" class="search-img" />
        <input
          type="search"
          placeholder="search a city or country"
          class="type"
          onChange={handleCityChange}
        />
        <button class="search">🔍</button>

        <button class="current" id="current">
          current
        </button>
      </form>
     <WeatherInfo data={weatherData}/>
    </div>
  );
} else {
  search();
  return "loading...";
}
}
