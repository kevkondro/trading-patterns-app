import React, { lazy, Suspense, useState } from "react";
import { Tabs as MuiTabs, Tab as MuiTab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Define separate components for each tab
const Tab1 = lazy(() => import("./ChartSearch.js"));
const Tab2 = lazy(() => import("./Rules.js"));
const Tab3 = lazy(() => import("./Probabilities.js"));
const Tab4 = lazy(() => import("./Notes.js"));
const Tab5 = lazy(() => import("./DataDisplay.js"));
const useStyles = makeStyles({
  tabs: {
    width:"10%",
    margin: "1.5px",
    fontSize: "14px",
    padding: "0px",
  },
});
export default function Tabs() {
  
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <MuiTabs value={activeTab} onChange={handleTabChange}
        // add custom styles to adjust for smaller screens
        style={{
          margin: "0px",
          // reduce font size for smaller screens
          fontSize: "14px",
          // reduce padding for smaller screens
          padding: "0px",
        }}>
        <MuiTab label="Search" className={classes.tabs}/>
        <MuiTab label="Rules" className={classes.tabs}/>
        <MuiTab label="Probs" className={classes.tabs}/>
        <MuiTab label="Notes" className={classes.tabs}/>
        <MuiTab label="Data" className={classes.tabs}/>
      </MuiTabs>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {activeTab === 0 && <Tab1 />}
          {activeTab === 1 && <Tab2 />}
          {activeTab === 2 && <Tab3 />}
          {activeTab === 3 && <Tab4 />}
          {activeTab === 4 && <Tab5 />}
        </Suspense>
      </div>
    </div>
  );
}
