import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";

import "./Map.scss";
import {
  simpleGB as data,
  GBNorthMost,
  GBEastMost,
  GBSouthMost,
  GBWestMost
} from "../../constants/shapes";
import { getLocations } from "../../selectors/Locations";

// in a "N, E, S, W" point order
const getMapExtremes = data => {
  const northMost = Math.max.apply(
    Math,
    data.map(point => point.y)
  );
  const southMost = Math.min.apply(
    Math,
    data.map(point => point.y)
  );
  const eastMost = Math.max.apply(
    Math,
    data.map(point => point.x)
  );
  const westMost = Math.min.apply(
    Math,
    data.map(point => point.x)
  );
  return { northMost, eastMost, southMost, westMost };
};

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

  useEffect(() => {
    const mapExtremes = getMapExtremes(data);

    const xScaleLngLat = d3
      .scaleLinear()
      .domain([GBWestMost.longitude, GBEastMost.longitude])
      .range([xScale(mapExtremes.westMost), xScale(mapExtremes.eastMost)]);

    const yScaleLngLat = d3
      .scaleLinear()
      .domain([GBSouthMost.latitude, GBNorthMost.latitude])
      .range([yScale(mapExtremes.northMost), yScale(mapExtremes.southMost)]);

    let svg = d3
      .select("#mapSVG")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    const line = d3
      .line()
      .x(data => xScale(data.x))
      .y(data => yScale(data.y));

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
      .attr("cx", locations => xScaleLngLat(locations.longitude))
      .attr("cy", locations => yScaleLngLat(locations.latitude))
      .attr("r", 3);
  });

  return <svg id="mapSVG" />;
};

const mapStateToProps = state => ({
  locations: getLocations(state)
});

export default connect(mapStateToProps, null)(Map);
