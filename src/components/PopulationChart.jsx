import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

// Sample data for each district's gender distribution
const data = [
  { name: 'Kasargod', males: 628613, females: 678762 },
  { name: 'Kannur', males: 1181446, females: 1341557 },
  { name: 'Wayanad', males: 401684, females: 415736 },
  { name: 'Kozhikode', males: 1470942, females: 1615351 },
  { name: 'Malappuram', males: 1960328, females: 2152592 },
  { name: 'Palakkad', males: 1359478, females: 1450456 },
  { name: 'Thrissur', males: 1480763, females: 1640437 },
  { name: 'Ernakulam', males: 1619557, females: 1662831 },
  { name: 'Idukki', males: 552808, females: 556166 },
  { name: 'Kottayam', males: 968289, females: 1006262 },
  { name: 'Alappuzha', males: 1013142, females: 1114647 },
  { name: 'Pathanamthitta', males: 561716, females: 635696 },
  { name: 'Kollam', males: 1246968, females: 1388407 },
  { name: 'Thiruvananthapuram', males: 1581678, females: 1719749 }
];

// Age distribution data for the pie chart
const ageData = [
  { name: '0–6 years', value: 9.95 },
  { name: '7–14 years', value: 23.9 },
  { name: '15–59 years', value: 54.3 },
  { name: '60 years and over', value: 12.8 },
];

// Development stages data separated by categories
const agricultureDevelopmentData = [
  { stage: 'High', districts: 1, area: 11.6, population: 8.4 },
  { stage: 'High middle', districts: 7, area: 52.5, population: 50.5 },
  { stage: 'Low middle', districts: 2, area: 13.5, population: 11.8 },
  { stage: 'Low', districts: 4, area: 22.4, population: 29.3 },
];

const infrastructureDevelopmentData = [
  { stage: 'High', districts: 1, area: 7.9, population: 9.4 },
  { stage: 'High middle', districts: 7, area: 42.5, population: 50.8 },
  { stage: 'Low middle', districts: 4, area: 32.4, population: 34.2 },
  { stage: 'Low', districts: 2, area: 17.2, population: 5.6 },
];

const industrialDevelopmentData = [
  { stage: 'High', districts: 3, area: 18.5, population: 27.5 },
  { stage: 'High middle', districts: 4, area: 29.4, population: 33.5 },
  { stage: 'Low middle', districts: 5, area: 35.3, population: 31.8 },
  { stage: 'Low', districts: 2, area: 16.8, population: 7.2 },
];

const socioEconomicDevelopmentData = [
  { stage: 'High', districts: 3, area: 22.2, population: 25.1 },
  { stage: 'High middle', districts: 5, area: 28.2, population: 35.2 },
  { stage: 'Low middle', districts: 3, area: 27.2, population: 30.2 },
  { stage: 'Low', districts: 3, area: 22.4, population: 9.5 },
];

// Colors for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PopulationChart = () => {
  // Scroll to the top when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Population Distribution by Gender for Districts</h2>
      <BarChart
        width={900}
        height={600}
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        barSize={20}
        barCategoryGap={50}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" width={150} />
        <Tooltip />
        <Legend />
        <Bar dataKey="males" fill="#0088FE" />
        <Bar dataKey="females" fill="#00C49F" />
      </BarChart>

      {/* Pie Chart for Age Distribution */}
      <h2>Age Distribution (2011 Census)</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={ageData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {ageData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{ marginTop: 20 }} />
      </PieChart>

      {/* Separate Bar Charts for Each Development Category */}
      <h2>Development</h2>
      <h2>Agriculture Development</h2>
      <BarChart
        width={600}
        height={300}
        data={agricultureDevelopmentData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="districts" fill="#82ca9d" />
        <Bar dataKey="area" fill="#8884d8" />
        <Bar dataKey="population" fill="#ffc658" />
      </BarChart>

      <h2>Infrastructure Development</h2>
      <BarChart
        width={600}
        height={300}
        data={infrastructureDevelopmentData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="districts" fill="#82ca9d" />
        <Bar dataKey="area" fill="#8884d8" />
        <Bar dataKey="population" fill="#ffc658" />
      </BarChart>

      <h2>Industrial Development</h2>
      <BarChart
        width={600}
        height={300}
        data={industrialDevelopmentData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="districts" fill="#82ca9d" />
        <Bar dataKey="area" fill="#8884d8" />
        <Bar dataKey="population" fill="#ffc658" />
      </BarChart>

      <h2>Socio-economic Development</h2>
      <BarChart
        width={600}
        height={300}
        data={socioEconomicDevelopmentData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="districts" fill="#82ca9d" />
        <Bar dataKey="area" fill="#8884d8" />
        <Bar dataKey="population" fill="#ffc658" />
      </BarChart>
    </div>
  );
};

export default PopulationChart;
