import Tabs from "./Tabs";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "Trading Patterns";
  }, []);

  return (
    <div>
      <h1 style={{ fontFamily: "Droid Sans" }}>Trading Patterns</h1>
      <Tabs />
    </div>
  );
}

export default App;
