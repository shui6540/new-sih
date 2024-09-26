import React, { useState } from "react";
import "./IndianTabs.css";

const statesAndUTs = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", 
  "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(statesAndUTs[0]);

  return (
    <div>
      <div className="tabs">
        {statesAndUTs.map((state, index) => (
          <div
            key={index}
            className={`tab ${activeTab === state ? "active" : ""}`}
            onClick={() => setActiveTab(state)}
          >
            {state}
          </div>
        ))}
      </div>
      <div className="content">
        <h2>{activeTab}</h2>
        <p>Details about {activeTab}...</p>
      </div>
    </div>
  );
};

export default Tabs;
