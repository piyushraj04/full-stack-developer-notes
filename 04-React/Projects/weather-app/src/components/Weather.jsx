import { useEffect, useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    if(city.trim()==="")return;
    let myTimeOut = setTimeout( async () => {
      const url = `https://goweather.xyz/v2/weather/${city}`;
      const fetched_url = fetch(url);
      fetched_url
        .then((resp) => {
          if (!resp.ok) {
            setError("Server is not responding...❌");
          } else {
            return resp.json();
          }
        })
        .then((report) => setData(report))
        .catch((err) => setError(err))
        .finally(() => console.log("fetching weather is done...✅"));
    }, 1000);
    return ()=> clearTimeout(myTimeOut);
  }, [city]);
  function handleClick(e){
    setCity(e.target.value);
  }
  return (
    <div className="weather-page">
      <div className="weather-container">
        <h1 className="weather-title">Weather App</h1>

        <div className="search-box">
          <input type="text" placeholder="Enter city name" value={city} onChange={handleClick}/>
          <button onClick={handleClick}>Search</button>
        </div>

       {
        data.temperature && (
           <div className="weather-card">
          <h2>{city}</h2>
          <h1>{data.temperature}</h1>
          <p>☀️ Sunny</p>
          <p>Humidity: 65%</p>
          <p>Wind: 12 km/h</p>
        </div>
        )
       }
      </div>
    </div>
  );
}

export default Weather;
