import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Java", "Swift", "JavaScript", "HTML", "CSS", "SQL", "ReactJS"],
  datasets: [
    {
      backgroundColor: "#00cccc",
      borderColor: "#009999",
      borderWidth: 1,
      hoverBackgroundColor: "#00eeee",
      hoverBorderColor: "#00bbbb",
      data: [6, 9, 8, 8, 8, 7, 6],
    },
  ],
};

const options = {
  tooltips: {
    displayColors: false,
    bodyAlign: "center",
  },
  legend: {
    display: false, // remove label
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawTicks: false,
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          display: false, //this will remove only the label
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawTicks: false,
          drawOnChartArea: false,
        },
        ticks: {
          fontColor: "#008888",
          fontSize: 18,
          fontFamily: "Courier New",
          padding: 10,
        },
      },
    ],
  },
};

class Skills extends React.Component {
  render() {
    return (
      <div>
        <HorizontalBar data={data} options={options} />
      </div>
    );
  }
}

export default Skills;
