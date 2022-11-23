import React from 'react';
import './CurrentWeather.scss';

const CurrentWeather = ({currentWeather}) => {
    // console.log(currentWeather);
    const {city, wind, main: {feels_like, humidity, pressure, temp}, weather} = currentWeather;
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{city}</p>
                    <p className='weather-desc'>{weather[0].main}</p>
                </div>
            <img src={`icons/${weather[0].icon}.png`} alt='weather' className='weather-icon'/>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{feels_like}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
