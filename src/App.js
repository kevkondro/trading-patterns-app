import Tabs from "./Tabs";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    document.title = "Trading Patterns";
  }, []);
  
  return (
    <div>
      <h1 style={{ fontFamily: "Droid Sans" }}>Trading Patterns</h1>
      <Tabs />
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[4]}</td>
            </tr>
          ))}
        </tbody>

    </div>
  );
}

export default App;
