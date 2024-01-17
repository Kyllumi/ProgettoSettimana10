function ForecastComp({ forecast }) {
    const filteredForecast = forecast.filter((item, index, self) => {
        const date = new Date(item.dt_txt);
        date.setHours(0, 0, 0, 0);

        return index === self.findIndex((otherItem) => {
            const otherDate = new Date(otherItem.dt_txt);
            otherDate.setHours(0, 0, 0, 0);

            return date.getTime() === otherDate.getTime();
        });
    });

    return (
        <div className='forecast'>
            <h4>Meteo dei prossimi giorni</h4>
            <div className='container2'>
                {filteredForecast.slice(1).map((item, index) => {
                    const date = new Date(item.dt_txt);
                    const formattedDate = date.toLocaleDateString('it-IT');

                    return (
                        <div key={index} className='singleDay'>
                            <div>
                                <p className='fw-bold text-center'>{formattedDate}</p>
                                <img src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`} alt="weather"></img>
                            </div>
                            <div>
                                <p>{item.weather[0].main}</p>
                                <p>Temp: {item.main.temp.toFixed(0)}°C</p>
                                <p>Perc: {item.main.feels_like.toFixed(0)}°C</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ForecastComp;
