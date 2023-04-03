import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchUserDetails } from "./fetchUserData.js";
import Loader from "./Loader.js";
import "./Github.css";

const Github = () => {
  const [inputValue, setInputValue] = useState("");
  const [foundUser, setFoundUser] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [errorAnimationClass, setErrorAnimationClass] = useState("");

  const handleInputSearch = (event) => {
    setInputValue(event.target.value);
  };

  const searchRequest = async () => {
    setIsLoading(true);
    try {
      const { userDetails } = await fetchUserDetails(inputValue);
      setFoundUser([userDetails]);
      setError(false);

      console.log(foundUser);
    } catch (error) {
      setFoundUser("");
      setError(true);
      setErrorAnimationClass("error__container--bounce");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchForUser = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setErrorAnimationClass("");
      searchRequest();
    }
  };

  const handleAnimationEnd = () => {
    setErrorAnimationClass("");
  };

  return (
    <div className="github__wrapper">
      <div className="github__container">
        <h1>Github Profile Finder</h1>

        <form
          className="github__container__input__wrapper"
          onSubmit={searchForUser}
        >
          <input
            placeholder="Search for profile..."
            value={inputValue}
            onChange={handleInputSearch}
          />
          <button className="todoadd__button" type="submit">
            FIND
          </button>
        </form>
        {isLoading ? ( // check if isLoading is true
          <Loader />
        ) : foundUser.length !== 0 && !error ? (
          foundUser.map((user, idx) => (
            <div className="github__container__item" key={user.id}>
              <h2>{user.login}</h2>
              <img src={user.avatar_url} alt="avatar" />
              <p>{user.location}</p>
              <Link to={`/github/${user.login}`} className="country__link">
                <button className="todoadd__button">MORE</button>
              </Link>
            </div>
          ))
        ) : (
          ""
        )}
        {error && (
          <div
            className={`container__error ${errorAnimationClass}`}
            onAnimationEnd={handleAnimationEnd}
          >
            <h2>Oops there's no profile on github with this nickname!</h2>
            <p>Try to find profile again!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;
