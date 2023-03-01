import React, { useState, useEffect } from "react";
import { getAllMemes } from "./MemesApi";

const MemerGenerate = ({
  setSelectedMeme,
  setSelectedMemeUrl,

  setCaptions,
}) => {
  const [dataMeme, setDataMeme] = useState([]);

  // Getting API data
  useEffect(() => {
    getAllMemes().then((memes) => {
      setDataMeme(memes.data.memes);
    });
  }, []);
  // Generating random meme from API data and setting to state
  const generateRandomMeme = () => {
    if (dataMeme.length > 0) {
      const randomMeme = dataMeme[Math.floor(Math.random() * dataMeme.length)];
      setSelectedMeme(randomMeme);
      setSelectedMemeUrl(randomMeme.url);
      setCaptions(new Array(randomMeme.box_count).fill(""));
    }
  };
  // returning button that will generate random meme image
  return (
    <>
      <button className="button__random" onClick={generateRandomMeme}>
        Generate Random Meme
      </button>
    </>
  );
};

export default MemerGenerate;
