import React, { useEffect, useState, useRef } from 'react';


import '../styles/Container.css';
import '../styles/SearchBar.css';
import iconMap from '../../assets/images/icons';

import search_icon from '../../assets/images/find.png';
import wind_icon from '../../assets/images/wind.svg';
import humidity_icon from '../../assets/images/humidity.svg';



const Container = () => {
    const [WeatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();



    // Search function to fetch weather data
    const search = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();

            const iconCode = data.weather[0]?.icon;
            const icon = iconMap[iconCode] || icon_clear;

            setWeatherData({
                windspeed: data.wind.speed,
                temp: Math.floor(data.main.temp),
                status: data.weather[0]?.description,
                location: data.name,
                humidity: data.main.humidity,
                icon: icon,
            });

            setLoading(false);
        } catch (error) {
            setLoading(false);
            if (error.message.includes('404')) {
                setError('City not found! Please check the name.');
            } else {
                setError('An error occurred. Please try again later.');
            }
            setWeatherData(null);
        }
    };

    useEffect(() => {

    }, []);

    return (
        <>
            <form id='search' className="search" >
                <input
                    aria-label="Search for a city"
                    ref={inputRef}
                    placeholder='Find a city...'
                    id='input'
                    autoFocus
                    required
                />
                <img
                    src={search_icon}
                    height={38}
                    width={38}
                    id='find'
                    onClick={() => search(inputRef.current.value)} // Trigger search on icon click
                />
            </form>

            {/* Show error message if there is any */}
            {error && <p className="error-message">{error}</p>}

            {/* Show loading message while fetching data */}
            {loading && <div>Loading...</div>}

            {/* Only show weather data if available */}
            {WeatherData && (
                <div className="weather-container">
                    <img className="weather-icon" src={WeatherData.icon} alt="Weather icon" />
                    <p className="location">{WeatherData.location}</p>
                    <p className="status">{WeatherData.status}</p>
                    <p className="temperature">
                        {WeatherData.temp} C°
                    </p>


                    <div className='add_data'>

                        <div className='wind_div'>
                            <img src={wind_icon} height={38} />
                            <div className='wind_data'>
                                <span className='value'>{WeatherData.windspeed} m/s</span> <br />
                                <span className='wind_head'>Wind speed</span>
                            </div>
                        </div>

                        <div className='humidity_div'>
                            <img src={humidity_icon} height={38}/>
                            <div className='humidity_data'>
                                <span className='value'>{WeatherData.humidity}%</span> <br />
                                <span className='humidity_head'>Humidity</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Container;
