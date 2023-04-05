import Tabs from "./Tabs";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  useEffect(() => {
    document.title = "Trading Patterns";
  }, []);
  return (
    <div>
      <h1 style={{ fontFamily: "Droid Sans" }}>Trading Patterns</h1>
      <Tabs />
      <h1>{message}</h1>
    </div>
    
  );
}

export default App;
