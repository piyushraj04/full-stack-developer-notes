import { useEffect, useState } from "react";
import "./Weather.css";

function Weather2() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  let fetchweather;
  useEffect(() => {
    const res = axios
      .get(`https://goweather.xyz/v2/weather/${city}`)
      .then((res) => {
        setData(res.data);
      });
  }, [city]);

  const handleFormSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
  }
  return (
    <div className="weather-page">
      <div className="weather-container">
        <h1 className="weather-title">Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleFormSubmit}
          />
          <button onClick={handleFormSubmit}>Search</button>
        </div>

        {data.temperature && (
          <div className="weather-card">
            <h2>{city}</h2>
            <h1>{data.temperature}</h1>
            <p>☀️ Sunny</p>
            <p>Humidity: 65%</p>
            <p>Wind: 12 km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather2;
