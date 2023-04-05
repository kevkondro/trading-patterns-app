import React, { lazy, Suspense, useState } from "react";
import { Tabs as MuiTabs, Tab as MuiTab } from "@material-ui/core";

// Define separate components for each tab
const Tab1 = lazy(() => import("./ChartSearch.js"));
const Tab2 = lazy(() => import("./Rules.js"));
const Tab3 = lazy(() => import("./Probabilities.js"));
const Tab4 = lazy(() => import("./Notes.js"));
const Tab5 = lazy(() => import("./DataDisplay.js"));

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <MuiTabs value={activeTab} onChange={handleTabChange}>
        <MuiTab label="Search" />
        <MuiTab label="Rules" />
        <MuiTab label="Probabilities" />
        <MuiTab label="Notes" />
        <MuiTab label="Data" />
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
