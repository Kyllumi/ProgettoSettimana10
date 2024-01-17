import React, { useState } from 'react';
import axios from 'axios';
import ForecastComp from './components/ForecastComp';
import './App.css';

function App() {
  const [weather, setWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState('')

  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=aeb02ba89682003efc90169dbc330d39`
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=aeb02ba89682003efc90169dbc330d39`

  const searchWeather = () => {
    axios.get(urlWeather).then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })
    setLocation('')
  }

  const searchForecast = () => {
    axios.get(urlForecast).then((response) => {
      setForecast(response.data.list)
      console.log(response.data.list)
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchWeather();
      searchForecast();
    }
  }

  return (
    <div className="App">
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Inserisci città'
          type="text" />
      </div>

      {weather.name !== undefined &&
        <>
          <div className='container'>
            <div className='top'>
              <div className='location'>
                <p>{weather.name}</p>
              </div>
              <div className='temperature'>
                {weather.main ? <h1>{weather.main.temp.toFixed(0)}°C</h1> : null}
              </div>
              <div className='description'>
                {weather.weather ? <p>{weather.weather[0].main} <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather"></img></p> : null}
              </div>
            </div>

            <div className='bottom'>
              <div className='feels'>
                {weather.main ? <p className='bold'>{weather.main.feels_like.toFixed(0)}°C</p> : null}
                <p className='italic fs-6'>Percepiti</p>
              </div>
              <div className='humidity'>
                {weather.main ? <p className='bold'>{weather.main.humidity.toFixed(0)}%</p> : null}
                <p className='italic fs-6'>Umidità</p>
              </div>
              <div className='wind'>
                {weather.wind ? <p className='bold'>{weather.wind.speed.toFixed(0)}km/h</p> : null}
                <p className='italic fs-6'>Vento</p>
              </div>
            </div>
          </div>
          {forecast.length > 0 &&
            <ForecastComp forecast={forecast} />
          }
        </>
      }
    </div>
  );
}

export default App;
