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
      <h1>Probability of success of 70 percent or better (reward has to be at least half as big as risk just to break even)</h1>
      <p>
        Scalps, but since most traders cannot consistently pick trades with a 70 percent chance of success, they should trade a scalp only if the reward is at least as large as the risk. 
        For example, if you believe that a two-point stop is needed in the Emini, take the trade only if at least a two-point reward is reasonable.
      </p>
      <h1>Probability of success of 60 percent or better (reward has to be at least as big as risk to break even):</h1>
      <p>
        <li>Buying a high 2 pullback to the moving average in a bull trend. </li>
        <li>Selling a low 2 pullback to the moving average in a bear trend. </li>
        <li>Buying a wedge bull flag pullback in a bull trend.</li> 
        <li>Selling a wedge bear flag pullback in a bear trend.</li> 
        <li>Buying a breakout pullback from a breakout of a bull flag in a bull trend. </li>
        <li>Selling a breakout pullback from a breakout of a bear flag in a bear trend.</li>
        <li>Buying a high 1 pullback in a strong bull spike in a bull trend, but not after a buy climax. </li> 
        <li>Selling a low 1 pullback in a strong bear spike in a bear trend, but not after a sell climax. </li> 
        <li>Shorting at the top of a trading range, especially if it is a second entry. </li> 
        <li>Buying at the bottom of a trading range, especially if it is a second entry. </li> 
        <li>Trend reversals: </li> 
        <li>After a strong break of the trend line, look for a reversal after a test of the trend's extreme where there is a good reversal signal bar. ‘Traders are looking to buy a higher low or a lower low at a bottom, or to short a higher high or a lower high ata top. </li> 
        <li>Strong final flag reversal.</li> 
      </p>
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
