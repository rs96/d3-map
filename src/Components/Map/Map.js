import React, { useEffect } from "react";
import * as d3 from "d3";

import "./Map.scss";
import { simpleGB as data, locations } from "../../Constants/shapes";

const Map = () => {
  const width = 200;
  const height = 200;

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
    .x(data => xScale(data.x))
    .y(data => yScale(data.y));

  useEffect(() => {
    let svg = d3
      .select("#mapSVG")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

    svg
      .selectAll("locations")
      .data(locations)
      .enter()
      .append("circle")
      .attr("class", "location")
      .attr("cx", locations => xScale(locations.x))
      .attr("cy", locations => yScale(locations.y))
      .attr("r", 3);
  });

  return <svg id="mapSVG" />;
};

export default Map;
