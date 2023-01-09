import React from 'react';
import Spinner from './Spinner';

const Card = ({ showData, loadingData, weather, forecast, newImage }) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;

  let url = "";
  let iconToday = "";
  let iconTomorrow = "";
  let iconafterTomorrow = "";
  if (loadingData) {
    return <Spinner />;
  }
  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconToday = url + weather.weather[0].icon + ".png";
    iconTomorrow = url + forecast.list[1].weather[0].icon + ".png";
    iconafterTomorrow = url + forecast.list[2].weather[0].icon + ".png";
  }



  return (
    <div className='mt-5'>
      {showData === true ? (
        <div className='container'>
          <div className='card mb-3 mx-auto text-light'>
            <div className='row g-0'>
              <div className='col-md-4'>
                <h3 className='card-title'>{weather.name} ({weather.sys.country})</h3>
                <p className='card-date'>{date}</p>
                <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                <p className='card-desc'><img src={iconToday} alt="icon" />{weather.weather[0].description}</p>
                <img src={newImage.results[1].preview_photos[1].urls.regular} className='img-fluid rounded-start img' alt='img' />
              </div>
              <div className='col-md-8'>
                <div className='card-body text-start mt-2'>
                  <div className='d-flex flex-row'>
                    <div className='card-humWind p-4'>
                      <h3 className='card-hum'>Humedad: {weather.main.humidity}%</h3>
                      <h3 className='card-wind'>Viento: {weather.wind.speed} m/s</h3>
                    </div>
                    <div className='card-maxMin p-4'>
                      <h3 className='temp-max'>Temp máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h3>
                      <h3 className='temp-min'>Temp mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h3>
                    </div>
                  </div>
                  <div className='card-sens col-md-8 mx-auto'>
                    <h3 className='card-term'>Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</h3>
                  </div>
                </div>
                <div className='forecastContainer col-md-9 mt-5 d-flex flex-row'>
                  <div className='p-4'>
                    <h4>Mañana:<br /> {(forecast.list[1].main.temp - 273.15).toFixed(1)} ºC</h4>
                    <h5>{forecast.list[1].weather[0].description}</h5>
                    <p><img src={iconTomorrow} alt='imgTomorrow' /></p>
                  </div>
                  <div className='p-4'>
                    <h4>Pasado mañana:<br /> {(forecast.list[2].main.temp - 273.15).toFixed(1)} ºC</h4>
                    <h5>{forecast.list[2].weather[0].description}</h5>
                    <p><img src={iconafterTomorrow} alt='imgTomorrow' /></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div>

          </div>

        </div>
      ) : (
        <h2>Introduzca ciudad o país</h2>
      )}
    </div>
  )
}

export default Card