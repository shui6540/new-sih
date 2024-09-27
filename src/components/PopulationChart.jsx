import React, { useState } from "react";
import "./IndianTabs.css";
import Kerala from "./Kerala"; // Import Kerala component

const statesAndUTs = [
  "Kerala", // Add Kerala at the top for easy access
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", 
  "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
];

const PopulationChart = () => {
  const [activeTab, setActiveTab] = useState(statesAndUTs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case "Kerala":
        return <Kerala />;
      case "Andhra Pradesh":
        return <Kerala />;
      case "Arunachal Pradesh":
        return <Kerala />;
      case "Assam":
        return <Kerala />;
      case "Bihar":
        return <Kerala />;
      case "Chhattisgarh":
        return <Kerala />;
      case "Goa":
        return <Kerala />;
      case "Gujarat":
        return <Kerala />;
      case "Haryana":
        return <Kerala />;
      case "Himachal Pradesh":
        return <Kerala />;
      case "Jharkhand":
        return <Kerala/>;
      case "Karnataka":
        return <Kerala />;
      case "Madhya Pradesh":
        return <Kerala />;
      case "Maharashtra":
        return <Kerala />;
      case "Manipur":
        return <Kerala />;
      case "Meghalaya":
        return <Kerala />;
      case "Mizoram":
        return <Kerala />;
      case "Nagaland":
        return <Kerala />;
      case "Odisha":
        return <Kerala />;
      case "Punjab":
        return <Kerala />;
      case "Rajasthan":
        return <Kerala />;
      case "Sikkim":
        return <Kerala />;
      case "Tamil Nadu":
        return <Kerala />;
      case "Telangana":
        return <Kerala />;
      case "Tripura":
        return <Kerala />;
      case "Uttar Pradesh":
        return <Kerala />;
      case "Uttarakhand":
        return <Kerala />;
      case "West Bengal":
        return <Kerala />;
      case "Andaman and Nicobar Islands":
        return <Kerala />;
      case "Chandigarh":
        return <Kerala />;
      case "Dadra and Nagar Haveli":
        return <Kerala />;
      case "Daman and Diu":
        return <Kerala />;
      case "Delhi":
        return <Kerala />;
      case "Lakshadweep":
        return <Kerala />;
      case "Puducherry":
        return <Kerala />;
      default:
        return <p>Data not available for {activeTab}</p>;
    }
  };

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
        {renderContent()} {/* Conditionally render the content */}
      </div>
    </div>
  );
};

export default PopulationChart;
