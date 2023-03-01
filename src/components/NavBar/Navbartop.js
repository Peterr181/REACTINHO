import React, { useState } from "react";
import "./Navbartop.css";
import pic from "../../images/face.jpg";
import { Link } from "react-router-dom";

const Navbartop = ({ isButtonClicked, handleButtonClick }) => {
  return (
    <div className="navbar-top">
      <Link className="nav__link" to="/">
        <div className="logo__name">
          <span className="react-color">React</span>inho
        </div>
        <div className="logo__name__mobile">
          <span className="mobile__logo react-color">R</span>
        </div>
      </Link>
      <div className="form__container">
        <form className="form__input">
          <input
            type="text"
            placeholder="Search something"
            className="input__text"
          />
        </form>
      </div>
      <div className="navbar-top__right">
        <a href="#" className="owner__contact">
          Contact Owner
        </a>
        <span className="material-symbols-outlined home top__icon mobile__icon border_r">
          article
        </span>
        <span className="material-symbols-outlined home top__icon">mail</span>
        <span className="material-symbols-outlined home top__icon pad__right border_r">
          notifications
        </span>
        <div className="owner__face__container">
          <img src={pic} alt="owner face" className="owner__face" />
          <span className="owner__name">John Dior</span>
          <span
            className="material-symbols-outlined menu-down"
            onClick={() => {
              document.getElementById("popup-menu").classList.toggle("show");
            }}
          >
            arrow_drop_down
          </span>
          <div className="popup-menu" id="popup-menu">
            <ul>
              <li className="popup__header">Profile</li>
              <li className="popup__logout borderli settings">
                <span className="material-symbols-outlined home logout__icon">
                  logout
                </span>
                <span>Logout</span>
              </li>
              <li className="borderli settings">
                <span className="material-symbols-outlined home settings__icon">
                  settings
                </span>
                <span>Settings</span>
              </li>
            </ul>
          </div>
          <div className="nav__button">
            <span
              className="material-symbols-outlined navopen__button"
              onClick={handleButtonClick}
            >
              format_line_spacing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbartop;
