import React from 'react'
import WeatherComp from './WeatherComp'
import ForecastComp from './ForecastComp'

export default function DetailComp({weather, forecast}) {
    return (
        <>
            <WeatherComp weather={weather}/>
            <ForecastComp forecast={forecast}/>
        </>
    )
}
