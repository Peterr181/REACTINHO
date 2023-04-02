import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Github.css";

const Github = () => {
  const [inputValue, setInputValue] = useState("");
  const [foundUser, setFoundUser] = useState([]);

  const handleInputSearch = (event) => {
    setInputValue(event.target.value);
  };

  const searchRequest = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      setFoundUser(response.data);
    } catch (error) {
      setFoundUser("");
      console.error(error);
    }
  };

  const searchForUser = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      searchRequest();
    }
  };

  return (
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
      {foundUser.length !== 0 && (
        <div className="github__container__item">
          <h2>{foundUser.login}</h2>
          <img src={foundUser.avatar_url} alt="avatar" />
          <p>{foundUser.bio}</p>
          <button className="todoadd__button">MORE</button>
        </div>
      )}
    </div>
  );
};

export default Github;
