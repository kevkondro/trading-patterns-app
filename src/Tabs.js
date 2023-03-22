import React, { lazy, Suspense, useState } from "react";
import { Tabs as MuiTabs, Tab as MuiTab } from "@material-ui/core";

// Define separate components for each tab
const Tab1 = lazy(() => import("./ChartSearch.js"));
const Tab2 = lazy(() => import("./Rules.js"));
//const Tab3 = lazy(() => import("./Tab3"));

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <MuiTabs value={activeTab} onChange={handleTabChange}>
        <MuiTab label="Chart Search" />
        <MuiTab label="Rules" />
      </MuiTabs>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {activeTab === 0 && <Tab1 />}
          {activeTab === 1 && <Tab2 />}
        </Suspense>
      </div>
    </div>
  );
}
