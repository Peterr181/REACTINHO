import React, { useState } from "react";
import "./Weather.css";

import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isSearchedTown, setIsSearchedTown] = useState(false);

  const apiKey = process.env.REACT_APP_KEY_API;

  const searchTown = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
      setIsSearchedTown(true);
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  return (
    <div className="weather__container">
      <div className="weather__container__item">
        <div className="weather__input__container">
          <h1>React Weather!</h1>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchTown}
            className="weather__input"
            type="text"
            placeholder="Enter city name"
          />
        </div>
        {isSearchedTown && (
          <div className="weather__info__container">
            <div className="weather__info__header__button">
              <h2 className="weather__info__header">Current Weather</h2>
            </div>
            <div className="weather__info__wrapper">
              <div className="weather__info__fullinfo__container">
                <h2 className="weather__info__cityname">{data.name}</h2>
                <span className="weather__info__detail">
                  {data.weather ? (
                    <span>{data.weather[0].description}</span>
                  ) : (
                    ""
                  )}
                </span>
                <div className="weather__info__strict__info">
                  {data.weather ? (
                    <img
                      alt="weather"
                      className="weather-icon"
                      src={`icons/${data.weather[0].icon}.png`}
                    />
                  ) : (
                    ""
                  )}
                  {data.main ? (
                    <span>{`${Math.round(data.main.temp)}°C`}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {data.name !== undefined && (
                <div className="weather__info__otherinfo">
                  <div className="weather__info__otherinfo__cont1">
                    <p className="feels__like">
                      <span class="material-symbols-outlined">
                        sentiment_satisfied
                      </span>
                      <span>{`${Math.round(data.main.feels_like)}°C `}</span>
                    </p>
                    <div className="weather__info__topmintemp">
                      <div className="topmin__container">
                        <div className="flexer">
                          <span class="material-symbols-outlined">
                            arrow_upward
                          </span>
                          <span>{`${Math.round(data.main.temp_max)}°C `}</span>
                        </div>
                        <div className="flexer">
                          <span class="material-symbols-outlined">
                            arrow_downward
                          </span>
                          <span>{`${Math.round(data.main.temp_min)}°C `}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="useless__info">
                    <span className="flexer2">
                      <span class="material-symbols-outlined">
                        humidity_high
                      </span>{" "}
                      {data.main.humidity}%
                    </span>
                    <span className="flexer2">
                      <span class="material-symbols-outlined">wind_power</span>{" "}
                      {Math.round(data.wind.speed)}KM/H
                    </span>
                    <span className="flexer2">
                      <span class="material-symbols-outlined">
                        blood_pressure
                      </span>{" "}
                      {data.main.pressure}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="weather__forecast__container"></div>
      </div>
    </div>
  );
};

export default Weather;
