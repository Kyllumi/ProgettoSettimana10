import React from 'react';

function WeatherComp({ weather }) {
    return (
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
    );
}

export default WeatherComp;
