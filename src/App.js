import Tabs from "./Tabs";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Trading Charts APP";
  }, []);
  return (
    <div>
      <h1 style={{ fontFamily: "Droid Sans" }}>Trading Charts APP</h1>
      <Tabs />
    </div>
  );
}

export default App;
