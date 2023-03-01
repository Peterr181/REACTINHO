import React, { useEffect } from "react";
import "./Introduction.css";
import messagePic from "../../images/indeks.png";
import stressPic from "../../images/Stress.png";

const Introduction = () => {
  return (
    <div className="introduction__container">
      <div className="introduction__content__wrapper">
        <div className="introduction__message__container">
          <div className="message_picture__container">
            <img src={messagePic} alt="message_news" className="intro_img" />
          </div>
          <h1 className="mobile__header">
            Welcome in <span className="react-color">REACT</span>INHO
          </h1>
          <div className="message_text__container">
            <h2>New refreshing look! </h2>
            <p>
              Reactinho admin is still working to make this website even better
              than it is actually!
            </p>
          </div>
          <div className="message_picture__container2">
            <img src={messagePic} alt="message_news" className="intro_img2" />
            <p>
              Reactinho admin is still working to make this website even better
              than it is actually!
            </p>
          </div>

          <div className="button__container">
            <a href="#">Get started</a>
          </div>
        </div>
        <div className="introduction__benefits__container">
          <div className="introduction__benefits__item">
            <div class="item__header">
              <h2>Plan your day! </h2>
            </div>

            <p>
              Reactinho provides adding things to a list that you need to do in
              day. You can keep them on this website to be perfect organized!
            </p>
          </div>
          <div className="introduction__benefits__item">
            <h2>Check weather!</h2>
            <p>
              Reactinho provides checking weather by simply entering their city
              name to the input! It's all by almost one click and typing city
              name!
            </p>
          </div>
          <div className="introduction__benefits__item">
            <h2>Smile everyday!</h2>
            <p>
              Reactinho thinks about how being happy is imporant in our lives.
              So you can go to the memer and create your own meme!
            </p>
          </div>
          <div className="introduction__benefits__item">
            <h2>Job friendly</h2>
            <p>
              If u don't know what type of programmer you can be in the future,
              you can check that here! Just provide us your technology stack.
            </p>
          </div>
        </div>
        <div className="introduction__final__container">
          <h1>
            Benefits from using <span className="react-color">REACT</span>INHO
          </h1>
          <div className="introduction__final">
            <div className="introduction__final__text__container">
              <ul>
                <div className="intro__wrap">
                  <span class="material-symbols-outlined">checklist</span>
                  <li>You will be always perfect organized!</li>
                </div>
                <div className="intro__wrap">
                  <span class="material-symbols-outlined">cloudy_snowing</span>
                  <li>Always up to date with weather news!</li>
                </div>
                <div className="intro__wrap">
                  <span class="material-symbols-outlined">exercise</span>
                  <li>Well informed about gym stuff!</li>
                </div>
                <div className="intro__wrap">
                  <span class="material-symbols-outlined">work</span>
                  <li>Know everything about your future career!</li>
                </div>
                <div className="intro__wrap">
                  <span class="material-symbols-outlined">sports_esports</span>
                  <li>Be more relaxed by playing short video game!</li>
                </div>
                <div className="intro__wrap">
                  <span class="material-symbols-outlined">star</span>
                  <li>Be delighted with excellent futuristic design!</li>
                </div>
              </ul>
            </div>
            <div className="introduction__final__img__container">
              <img src={stressPic} alt="stressful" className="stress_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
