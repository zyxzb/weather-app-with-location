import React,{useState} from 'react';
import CurrentWeather from 'components/currentWeather/CurrentWeather';
import Search from './components/search/Search';
import Forecast from 'components/forecast/Forecast';
import { OPEN_WEATHER_API_URL, OW_API_KEY } from 'api';
import Info from 'components/info/Info';
import Map from 'components/map/Map';
import './App.scss';
import Chart from 'components/chart/Chart';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleOnSearchChange = (searchedData) => {
    const [lat, lon] = searchedData.value.split(" ");
    setLatitude(+lat);
    setLongitude(+lon);
    const currentWeatherFetch = fetch(`${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OW_API_KEY}&units=metric`)
    const forecastWeatherFetch = fetch(`${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OW_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
    .then(async response => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({city: searchedData.label , ...weatherResponse})
      setForecast({city: searchedData.label, ...forecastResponse})
    }) 
    .catch(err => setError(`${err}`))
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather ?
      <div className='map-weather'>
        <CurrentWeather currentWeather={currentWeather} />
        <Map latitude={latitude} longitude={longitude} /> 
      </div>
      : <Info error={error}/> }
      {forecast !== null ? <Chart forecast={forecast}/> : null}
      {forecast && currentWeather && <Forecast forecast={forecast}/>}
    </div>
  );
}

export default App;
