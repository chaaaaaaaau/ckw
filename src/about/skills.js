import React from "react";

import CanvasJSReact from "./canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Skills extends React.Component {
  render() {
    CanvasJS.addColorSet("greenShades", [
      //colorSet Array

      "#2F4F4F",
      "#008080",
      "#2E8B57",
      "#3CB371",
      "#90EE90",
    ]);

    const options = {
      animationEnabled: true,
      theme: "light2",
      colorSet: "greenShades",
      /*
      title: {
        text: "Most Popular Social Networking Sites",
      },
      
      axisX: {
        title: "Social Network",
        reversed: true,
      },
      */
      axisY: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function () {
          return " ";
        },
      },

      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 5, label: "C++" },
            { y: 6, label: "Java" },
            { y: 9, label: "Swift" },
            { y: 8, label: "JavaScript" },
            { y: 8, label: "HTML" },
            { y: 8, label: "CSS" },
            { y: 7, label: "SQL" },
            { y: 6, label: "ReactJS" },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
  /*
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  */
}

export default Skills;
