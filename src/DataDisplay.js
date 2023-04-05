import React, { useState, useEffect } from "react";

function DataDisplay() {

  const liStyle = {
    padding: ".5em",
    fontFamily: "Droid Sans",
    margin: "10px 0",
    padding: "10px 0",
    width:"110%"
  };

  const cellStyle = {
    width: "65%",
    padding: ".5em",
    margin: "10px 0",
    padding: "10px 0",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={liStyle}>
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
