import Tabs from "./Tabs";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Trading APP";
  }, []);
  return (
    <div>
      <h1 style={{ fontFamily: "Droid Sans" }}>Trading APP</h1>
      <Tabs />
    </div>
  );
}

export default App;
