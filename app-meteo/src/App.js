import React, { useState } from 'react';
import axios from 'axios';
import SearchComp from './components/SearchComp';
import './App.css';
import DetailComp from './components/DetailComp';

function App() {
  const [weather, setWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState('')
  const [showSearch, setShowSearch] = useState(true)

  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=aeb02ba89682003efc90169dbc330d39`
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=aeb02ba89682003efc90169dbc330d39`

  const searchWeather = () => {
    axios.get(urlWeather).then((response) => {
      setWeather(response.data)
      setShowSearch(false)
    })
    setLocation('')
  }

  const searchForecast = () => {
    axios.get(urlForecast).then((response) => {
      setForecast(response.data.list)
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchWeather();
      searchForecast();
    }
  }

  const resetSearch = () => {
    setWeather({})
    setForecast({})
    setShowSearch(true)
  }

  return (
    <div className="App">
      {showSearch &&
        <SearchComp
          location={location}
          setLocation={setLocation}
          handleKeyDown={handleKeyDown}
        />
      }

      {!showSearch && weather.name !== undefined && forecast.length > 0 &&
        <>
          <button className='rounded-5 ' onClick={resetSearch}>Back</button>
          <DetailComp weather={weather} forecast={forecast} />
        </>
      }
    </div>
  );
}

export default App;
