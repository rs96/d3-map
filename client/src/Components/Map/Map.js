import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";

import "./Map.scss";
import { simpleGB as data } from "../../constants/shapes";
import { getLocations } from "../../selectors/Locations";

const Map = ({ locations }) => {
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
    console.log(locations);
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
      .attr("cx", locations => xScale(locations.longitude))
      .attr("cy", locations => yScale(locations.latitude))
      .attr("r", 3);
  });

  return <svg id="mapSVG" />;
};

const mapStateToProps = state => ({
  locations: getLocations(state)
});

export default connect(mapStateToProps, null)(Map);
