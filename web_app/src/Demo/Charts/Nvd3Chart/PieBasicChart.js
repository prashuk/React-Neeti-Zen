import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "Suggest", y: 16, color: "#ff8a65"},
    {key: "Medical", y: 16, color: "#f4c22b"},
    {key: "Expatriates", y: 16, color: "#3ebfea"},
    {key: "Serve Other", y: 12, color: "#4F5467"},
    {key: "Invite", y: 16, color: "#1de9b6"},
    {key: "Parliament", y: 12, color: "#a389d4"},
];

class PieBasicChart extends React.Component {

    render() {
        return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y"  />
    }
}

export default PieBasicChart;