import React, { useState, useEffect, createRef } from "react";
import { getAllMemes } from "./MemesApi";
import MemerGenerate from "./MemerGenerate";
import "./Memer.css";
import { exportComponentAsJPEG } from "react-component-export-image";

const Memer = () => {
  const [dataMeme, setDataMeme] = useState([]);
  const [selectedMemeUrl, setSelectedMemeUrl] = useState(null);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [captions, setCaptions] = useState([]);
  const memeRef = createRef();

  useEffect(() => {
    getAllMemes().then((memes) => {
      const memesData = memes.data.memes;
      setDataMeme(memesData);
      const randomMeme =
        memesData[Math.floor(Math.random() * memesData.length)];
      setSelectedMemeUrl(randomMeme.url); // getting url of image
      setSelectedMeme(randomMeme); // getting my generated meme
      setCaptions(new Array(randomMeme.box_count).fill(""));
    });
  }, []);

  const updateCaption = (e, index) => {
    const text = e.target.value || "";
    setCaptions((prevCaptions) => {
      const newCaptions = [...prevCaptions];
      newCaptions[index] = text;
      return newCaptions;
    });
  };

  const generateInputs = () => {
    if (selectedMeme === null) return null;

    const inputs = [];
    for (let i = 0; i < selectedMeme.box_count; i++) {
      const labelText = ` ${i + 1}: `;
      inputs.push(
        <div key={i} className="input__label__container">
          <label>{labelText}</label>
          <input
            onChange={(e) => updateCaption(e, i)}
            value={captions[i]}
            type="text"
            className="input__meme"
          />
        </div>
      );
    }
    console.log("captions: ", captions);
    return inputs;
  };

  const generateMeme = () => {
    const currentMeme = selectedMeme;
    const formData = new FormData();

    formData.append("username", process.env.REACT_APP_LOGIN);
    formData.append("password", process.env.REACT_APP_PASSWORD);
    formData.append("template_id", currentMeme.id);
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((res) => {
      res.json().then((res) => {
        const generatedImageUrl = res.data.url;
        setSelectedMemeUrl(generatedImageUrl);
      });
    });
  };

  return (
    <div className="memer__container">
      <div className="memer__content__wrapper">
        <div className="memer__container__item">
          <div ref={memeRef} className="meme__container__item__image">
            <img className="meme_img" src={selectedMemeUrl} alt="meme image" />
          </div>
          <div className="meme__container__item__inputs__container">
            {" "}
            {generateInputs()}
          </div>
          <div className="meme__container__item__button__container">
            <button className="button__genertext" onClick={generateMeme}>
              Generate your meme!
            </button>
            <MemerGenerate
              dataMeme={dataMeme}
              setSelectedMeme={setSelectedMeme}
              setSelectedMemeUrl={setSelectedMemeUrl}
              setCaptions={setCaptions}
            />
            <button
              className="button__download"
              onClick={(e) => exportComponentAsJPEG(memeRef)}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memer;
