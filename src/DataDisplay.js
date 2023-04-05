import React, { useState, useEffect } from "react";

function DataDisplay() {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    fetch("https://trading-patterns.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        //setHeader(data.shift()); // Remove and store the header row
        setData(data);
      });
  }, []);

  console.log(data)

  const cellStyle = {
    width: "80%",
    padding: ".5em",
    fontFamily: "Droid Sans",
    margin: "10px 0",
    padding: "10px 0",
  };
  const divStyle = {
    width: "80%",
    padding: ".5em",
    fontFamily: "Droid Sans",
    margin: "10px 0",
    padding: "10px 0",
  };

  if (data.length === 0) {
    return <p>No data to display.</p>;
  }

  return (
    <div style={divStyle}>
      <h2>Performance</h2>
      <table>
        <tbody>
        {data.slice(0, 4).map((row, index) => (
  <tr key={index}>
    <td style={cellStyle}>{row[0]}</td>
    <td style={cellStyle}>{row[1]}</td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;
