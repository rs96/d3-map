import React, { useEffect } from "react";
import * as d3 from "d3";

import "./Map.css";

const Map = () => {
  const width = 100;
  const height = 100;
  const exampleData = [
    { x: 10, y: 20 },
    { x: 20, y: 20 },
    { x: 20, y: 40 },
    { x: 10, y: 40 },
    { x: 10, y: 20 }
  ];

  const xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, height]);

  const line = d3
    .line()
    .x(exampleData => xScale(exampleData.x))
    .y(exampleData => yScale(exampleData.y));

  useEffect(() => {
    let svg = d3
      .select("#mapSVG")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    svg
      .append("path")
      .datum(exampleData)
      .attr("class", "line")
      .attr("d", line);
  });

  return <svg id="mapSVG" />;
};

export default Map;
