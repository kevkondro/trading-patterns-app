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
        <li>Buying a third or fourth push down in a bear stairs pattern for a test of the low of the prior push down.</li>  
        <li>Selling a third or fourth push up in a bull stairs pattern for a test of the high of the prior push up.</li> 
        <li>Entering using limit orders; this requires more experience reading charts, because the trader is entering in a market that is going in the opposite direction to the trade. However, experienced traders can reliably use limit or market orders with these setups:</li>  
        <li>Buying a bull spike in a strong bull breakout at the market or at the close of the bar, or on a limit order at or below the low of the prior bar (entering in spikes requires a wider stop and the spike happens quickly, so this combination is difficult for many traders).  </li> 
        <li>Selling a bear spike in a strong bear breakout at the market or at the close of the bar, or on a limit order at or above the high of the prior bar (entering in spikes requires a wider stop and the spike happens quickly, so this combination is difficult for many traders).  </li> 
        <li>Buying a bear breakout at around a measured move, if the breakout is not too strong—for example, if the range is about four points tall in the Emini, buying on a limit order at four points below the range, risking four points, and expecting a test of the breakout point. Only very experienced traders should consider this.  </li> 
        <li>Selling a bull breakout at around a measured move, if the breakout is not too strong—for example, if the range is about four points tall in the Emini, selling on a limit order at four points above the range, risking four points, and expecting a test of the breakout point. Only very experienced traders should consider this.  </li> 
        <li>Buying at or below a low 1 or 2 weak signal bar on a limit order in a possible new bull trend after a strong reversal or at the bottom of a trading range.  </li> 
        <li>Shorting at or above a high 1 or 2 weak signal bar on a limit order in a possible new bear trend after a strong reversal or at the top of a trading range.  </li> 
        <li>Buying at or below the prior bar on a limit order in a quiet bull flag at the moving average. </li>
        <li>Shorting at or above the prior bar on a limit order in a quiet bear flag at the moving average.  </li>
        <li>Buying below a bull bar that breaks above a bull flag, anticipating a breakout pullback.  </li>
        <li>Selling above a bear bar that breaks below a bear flag, anticipating a breakout pullback.  </li>

        <h1>Probability of success of about 50 percent (reward has to be at least 50 percent greater than risk to break even): </h1>
        
        <li> The initial entry when scaling into a position in a trading range.  </li>
        <li>Buying or selling in a tight trading range, expecting a breakout that would result in a profit that is several times greater than your risk. </li>
        <li>Shorting a lower high in a trading range when the trend might be reversing down, or buying a higher low when the trend might be reversing up. Since the entry is in the middle of the trading range, the probability is 50 percent, but the reward is usually twice the risk. </li>
        <h1>Probability of success of 40 percent or less (reward has to be at least twice the size of risk): </h1>
     
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
