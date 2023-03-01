import React from "react";

const CareerButton = ({ lang, onClick, disabled }) => {
  const buttonColor = (() => {
    switch (lang.jobTitle) {
      case "Frontend Developer":
        return "green-button";
      case "Backend Developer":
        return "red-button";
      case "Database Developer":
        return "blue-button";
      case "API Developer":
        return "orange-button";
      case "Cloud Developer":
        return "purple-button";
      case "Mobile and Web App Developer":
        return "yellow-button";
      case "Mobile App Developer":
        return "pink-button";
      case "Game Developer":
        return "brown-button";
      case "Graphics Developer":
        return "teal-button";
      case "Data Scientist":
        return "cus1-button";
      case "AI Developer":
        return "cus2-button";
      case "Legacy Developer":
        return "cus3-button";
      case "Object-Oriented Developer":
        return "cus4-button";
      case "UI/UX Designer":
        return "cus5-button";
      case "System Developer":
        return "cus6-button";
      case "iOS Developer":
        return "cus7-button";
      default:
        return "";
    }
  })();

  return (
    <button
      key={lang.name}
      onClick={() => onClick(lang)}
      className={`career__button ${buttonColor}`}
      disabled={disabled}
    >
      {lang.name}
    </button>
  );
};

export default CareerButton;
