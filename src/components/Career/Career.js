import React, { useState } from "react";
import "./Career.css";
import programmingLanguages from "./CareerTechnology";
import CareerButton from "./CareerButton";
import CareerButtonAdded from "./CareerButtonAdded";

const Career = () => {
  const [namesLanguages, setNamesLanguages] = useState([]);
  const [mostCommonProgrammerJobTitle, setMostCommonProgrammerJobTitle] =
    useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleLanguageClick = (lang) => {
    setNamesLanguages((prevNamesLanguages) => {
      const langIndex = prevNamesLanguages.findIndex(
        (item) => item.name === lang.name
      );
      if (langIndex > -1) {
        // if the language is already selected, remove it from the array
        return prevNamesLanguages.filter((item) => item.name !== lang.name);
      } else {
        // if the language is not already selected, add it to the array
        return [
          ...prevNamesLanguages,
          { name: lang.name, jobTitle: lang.jobTitle },
        ];
      }
    });
  };

  const handleRemoveLanguageClick = (name) => {
    setNamesLanguages(
      (prevNamesLanguages) =>
        prevNamesLanguages.filter((prevName) => prevName !== name) // remove the language from the array
    );
  };

  const handleResultButtonClick = () => {
    const jobTitleCounts = namesLanguages.reduce((counts, lang) => {
      counts[lang.jobTitle] = (counts[lang.jobTitle] || 0) + 1;
      return counts;
    }, {});

    let mostCommonJobTitle = Object.keys(jobTitleCounts)[0];
    let highestCount = jobTitleCounts[mostCommonJobTitle];

    Object.keys(jobTitleCounts).forEach((jobTitle) => {
      const count = jobTitleCounts[jobTitle];
      if (count > highestCount) {
        mostCommonJobTitle = jobTitle;
        highestCount = count;
      } else if (count === highestCount && jobTitle !== mostCommonJobTitle) {
        mostCommonJobTitle += `, ${jobTitle}`;
      }
    });

    setIsClicked(true);
    setMostCommonProgrammerJobTitle(mostCommonJobTitle);
  };

  const handlePlayAgain = () => {
    setIsClicked(false);
    setNamesLanguages([]);
  };

  return (
    <div className="career__container">
      <div className="career__container__huge__container">
        <div className="career__container__item">
          <h2 className="career__select__header">
            Select technologies that you know or want to know:
          </h2>
          <div className="career__buttons__container">
            {programmingLanguages.map((lang) => (
              <CareerButton
                lang={lang}
                onClick={handleLanguageClick}
                disabled={namesLanguages.includes(lang.name)}
              />
            ))}
          </div>
        </div>
        <div className="career__container__item__result">
          <h2 className="career__header">Selected programming languages: </h2>
          <div className="career_result__container">
            {namesLanguages.map((namep) => (
              <CareerButtonAdded
                namep={namep}
                onClick={() => handleRemoveLanguageClick(namep)}
              />
            ))}
          </div>
          <div className="finalresult__container">
            <h2 className="career__header">Check what developer you are!</h2>
            {isClicked && mostCommonProgrammerJobTitle !== undefined ? (
              <p className="finalresult__jobtitle ">
                {mostCommonProgrammerJobTitle}
              </p>
            ) : (
              <button
                className="finalresult__button"
                onClick={handleResultButtonClick}
              >
                Check
              </button>
            )}
          </div>
          <div className="finalresult__button__replay">
            {isClicked && namesLanguages.length !== 0 ? (
              <button className="finalresult__button" onClick={handlePlayAgain}>
                Try again!
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
