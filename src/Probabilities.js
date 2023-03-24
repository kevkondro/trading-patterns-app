import React, { useState } from 'react';
import prob_data from './prob.json';




export default function Probabilities() {
  const styleList = {
    fontSize: "20px",
    letterSpacing: "0.015em",
    fontFamily: "Droid Sans"
  };
  const liStyle = {
    padding: ".5em"
  };
  function manipulateValue(src) {
    // Regular expression pattern to match numbers in the input value
    const regexPattern = /https:\/\/drive\.google\.com\/file\/d\/(.+)\/view\?usp=share_link/;

    // Find all numbers in the input value using the regex pattern
    const matches = src.match(regexPattern);

    // Combine all matches into a single string
    const manipulatedValue = matches ? matches : '';
    const FinalmanipulatedValue = manipulatedValue !== '' ? manipulatedValue[1] : '';

    //console.log(FinalmanipulatedValue);
    FinalmanipulatedValue.trim();

    // Render the manipulated value in a new div
    return FinalmanipulatedValue;
  }

  const ImgMap = ({ key_index }) => {
    const key = Object.keys(prob_data)[parseInt(key_index)];
    const images = prob_data[key];

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={`https://drive.google.com/uc?id=${manipulateValue(img.src)}`}
            style={{ margin: '5px', width: '600px', height: 'auto' }}
          />
        ))}
      </div>
    );
  };

  const [showImgMap, setShowImgMap] = useState(false);
  const [currentKeyIndex, setCurrentKeyIndex] = useState(-1);

  const handleClick = (event) => {
    let key_index = 0;
    const value = event.currentTarget.getAttribute('data-value');
    if (value === '60%') {
      key_index = 0;
    } else if (value === '70%') {
      key_index = 1;
    } else {
      setShowImgMap(false);
      setCurrentKeyIndex(-1);
      return;
    }

    if (key_index !== currentKeyIndex) {
      setShowImgMap(true);
      setCurrentKeyIndex(key_index);
    } else {
      setShowImgMap((prevShowImgMap) => !prevShowImgMap);
    }
  };

  return (
    <div>
      <p></p>
      <ul style={styleList}>
        <li onClick={handleClick} data-value="60%">
          60%
        </li>
        <p></p>
        <li onClick={handleClick} data-value="70%">
          70%
        </li>
      </ul>
      {showImgMap && <ImgMap key_index={currentKeyIndex} />}
    </div>
  );
}
