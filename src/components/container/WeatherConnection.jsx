import React, { useState } from 'react'
import Card from '../pure/Card';
import WeatherForm from '../pure/form/WeatherForm';
import ImgContainer from './ImgContainer';

const WeatherConnection = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=69fdd4d7185c68887b1506917dae329c&lang=es"
    let cityURL = "&q=";
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=69fdd4d7185c68887b1506917dae329c&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState([]);

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);
        urlWeather = urlWeather + cityURL + loc;
        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
        urlForecast = urlForecast + cityURL + loc;
        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);
            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    let urlUnsplash = "https://api.unsplash.com/search/collections";
    let keyUnsplash = "PaajP2G8I9guEuZCeDplICc140hXQtReKkq3uhn6SX0"

    const getImage = async (loc) => {
        urlUnsplash = urlUnsplash + '?query=' + loc + '&client_id=' + keyUnsplash;
        await fetch(urlUnsplash).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((imageData) => {
            console.log(imageData);
            setImage(imageData);
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <React.Fragment>
            <WeatherForm
                newLocation={getLocation}
                newImage={getImage}
            />
            <Card
                showData={show}
                loadingData={loading}
                weather={weather}
                forecast={forecast}
                newImage={image}
            />

        </React.Fragment>
    )
};

export default WeatherConnection;