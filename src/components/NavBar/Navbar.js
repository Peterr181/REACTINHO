import { useState } from "react";
import "../NavBar/Navbar.css";
import pic from "../../images/face.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ isButtonClicked, setIsButtonClicked }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEditingName, setIsEditingName] = useState(false);
  const [userName, setUserName] = useState("John Dior");

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsButtonClicked(false);
  };

  return (
    <nav className={`sidebar ${isButtonClicked ? "active" : ""}`}>
      <ul className="nav">
        <li className="nav__profile">
          <div className="nav__profile__container">
            <div className="nav__profile__container__face">
              <img src={pic} alt="admin face" className="face" />
              <span className="count bg-success"></span>
            </div>
            <div className="nav__profile__container__text">
              <div className="nav__profile__container__text">
                {isEditingName ? (
                  <input
                    className="input__name"
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.keyCode === 13) {
                        setIsEditingName(false);
                      }
                    }}
                  />
                ) : (
                  <>
                    <span className="user__name">{userName}</span>
                    <span className="user__status">Premium User</span>
                  </>
                )}
              </div>
            </div>
            <span
              className="dots"
              onClick={() => {
                document
                  .getElementById("popup-menu2")
                  .classList.toggle("show2");
              }}
            >
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </span>
            <div className="popup-menu2" id="popup-menu2">
              <ul className="navigation__list">
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
                  <span>Role</span>
                </li>
                <li
                  className="edit__name"
                  onClick={() => setIsEditingName(true)}
                >
                  <span>{isEditingName ? "Editing..." : "Edit name"}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav__category">Navigation</li>
        <Link
          className="nav__link"
          to="/"
          onClick={() => console.log(isButtonClicked)}
        >
          <li
            className={`nav__item ${activeIndex === 0 ? "active1" : ""}`}
            onClick={() => handleItemClick(0)}
          >
            <span className="material-symbols-outlined home intro">home</span>
            <span>Introduction</span>
          </li>
        </Link>
        <Link className="nav__link" to="/todo">
          <li
            className={`nav__item ${activeIndex === 1 ? "active2" : ""}`}
            onClick={() => handleItemClick(1)}
          >
            <span className="material-symbols-outlined home todo">
              fact_check
            </span>
            <span>To-do app</span>
          </li>
        </Link>
        <Link className="nav__link" to="/weatherapp">
          <li
            className={`nav__item ${activeIndex === 2 ? "active3" : ""}`}
            onClick={() => handleItemClick(2)}
          >
            <span className="material-symbols-outlined home weather">
              cloudy_snowing
            </span>
            <span>Weather app</span>
          </li>
        </Link>
        <Link className="nav__link" to="/memer">
          <li
            className={`nav__item ${activeIndex === 3 ? "active4" : ""}`}
            onClick={() => handleItemClick(3)}
          >
            <span className="material-symbols-outlined home gym">
              sentiment_very_satisfied
            </span>
            <span>Memer</span>
          </li>
        </Link>
        <Link className="nav__link" to="/career">
          <li
            className={`nav__item ${activeIndex === 4 ? "active5" : ""}`}
            onClick={() => handleItemClick(4)}
          >
            <span className="material-symbols-outlined home itcareer">
              work
            </span>
            <span>IT Career</span>
          </li>
        </Link>
        <Link className="nav__link" to="/other">
          <li
            className={`nav__item ${activeIndex === 5 ? "active6" : ""}`}
            onClick={() => handleItemClick(5)}
          >
            <span className="material-symbols-outlined home other">folder</span>
            <span>Other</span>
          </li>
        </Link>
      </ul>
      <div className="socialmedia__wrapper">
        <div className="socialmedia__container">
          <a href="https://github.com/Peterr181" className="socialmedia__icon">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="#" className="socialmedia__icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" className="socialmedia__icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
