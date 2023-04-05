import React, { useState, useEffect } from "react";

function DataDisplay() {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    fetch("https://api-three-vert.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        //setHeader(data.shift()); // Remove and store the header row
        setData(data);
      });
  }, []);

  // console.log(data)

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
    return <p>Loading...</p>;
  }

  const targetRow = 0; // index of the target row
  const targetColumn = 1; // index of the target column

  return (
    <div style={divStyle}>
      <h2>Performance</h2>
      <table>
  <tbody>
    {data.slice(0, 5).map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, columnIndex) => {
          const targetCell = rowIndex === targetRow && columnIndex === targetColumn;
          const cellValue = targetCell ? parseFloat(cell.replace('$', '')) : cell;
          const isPositive = cellValue > 0;
          const cellStyles = targetCell
            ? { fontWeight: 'bold', ...(isPositive ? { color: 'green' } : { color: 'red' }) }
            : {};
          return (
            <td key={`${rowIndex}-${columnIndex}`} style={{ ...cellStyle, ...cellStyles }}>
              {cellValue}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default DataDisplay;
