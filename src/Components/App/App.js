import React from "react";

import Map from "../Map/Map";
import Table from "../Table/Table";
import DetailsLoadout from "../DetailsLoadout/DetailsLoadout";
import "./App.scss";

const App = () => (
  <div className="App">
    <h1>D3 Map</h1>
    <div className="main">
      <Table />
      <Map />
      <DetailsLoadout />
    </div>
  </div>
);

export default App;
