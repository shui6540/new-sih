import React from 'react';
import './StatesList.css';

const statesData = [
  { name: 'Andaman and Nicobar Islands', iconClass: 'andaman-nicobar', stateValue: '18 UT', centralValue: '466 Central' },
  { name: 'Andhra Pradesh', iconClass: 'andhra-pradesh', stateValue: '54 State', centralValue: '467 Central' },
  { name: 'Arunachal Pradesh', iconClass: 'arunachal-pradesh', stateValue: '35 State', centralValue: '470 Central' },
  { name: 'Assam', iconClass: 'assam', stateValue: '49 State', centralValue: '470 Central' },
  { name: 'Bihar', iconClass: 'bihar', stateValue: '54 State', centralValue: '466 Central' },
  { name: 'Chandigarh', iconClass: 'chandigarh', stateValue: '20 UT', centralValue: '466 Central' },
  { name: 'Goa', iconClass: 'goa', stateValue: '117 State', centralValue: '467 Central' },
  { name: 'Gujarat', iconClass: 'gujarat', stateValue: '118 State', centralValue: '468 Central' },
  { name: 'Jammu and Kashmir', iconClass: 'jammu-kashmir', stateValue: '27 UT', centralValue: '470 Central' },
  { name: 'Jharkhand', iconClass: 'jharkhand', stateValue: '23 State', centralValue: '466 Central' },
  { name: 'Karnataka', iconClass: 'karnataka', stateValue: '49 State', centralValue: '467 Central' },
  { name: 'Kerala', iconClass: 'kerala', stateValue: '72 State', centralValue: '468 Central' },
  { name: 'Madhya Pradesh', iconClass: 'madhya-pradesh', stateValue: '104 State', centralValue: '467 Central' },
  { name: 'Maharashtra', iconClass: 'maharashtra', stateValue: '51 State', centralValue: '466 Central' },
  { name: 'Manipur', iconClass: 'manipur', stateValue: '19 State', centralValue: '470 Central' },
  { name: 'Meghalaya', iconClass: 'meghalaya', stateValue: '63 State', centralValue: '469 Central' },
  { name: 'Nagaland', iconClass: 'nagaland', stateValue: '17 State', centralValue: '470 Central' },
  { name: 'Odisha', iconClass: 'odisha', stateValue: '73 State', centralValue: '468 Central' },
  { name: 'Punjab', iconClass: 'punjab', stateValue: '37 State', centralValue: '466 Central' },
  { name: 'Rajasthan', iconClass: 'rajasthan', stateValue: '85 State', centralValue: '467 Central' },
  { name: 'Sikkim', iconClass: 'sikkim', stateValue: '11 State', centralValue: '469 Central' },
  { name: 'Tamil Nadu', iconClass: 'tamil-nadu', stateValue: '67 State', centralValue: '468 Central' },
  { name: 'Telangana', iconClass: 'telangana', stateValue: '33 State', centralValue: '467 Central' },
  { name: 'Uttar Pradesh', iconClass: 'uttar-pradesh', stateValue: '243 State', centralValue: '467 Central' },
  { name: 'West Bengal', iconClass: 'west-bengal', stateValue: '91 State', centralValue: '467 Central' },
  // Add more states or union territories here if needed.
];

const StatesList = () => {
  return (
    <div className="states-container">
      {statesData.map((state, index) => (
        <div key={index} className="state-item">
          <div className={`state-icon ${state.iconClass}`}></div>
          <h2>{state.name}</h2>
          <div className="details-info">
            <span className="state">{state.stateValue}</span>
            <span className="central">{state.centralValue}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatesList;
