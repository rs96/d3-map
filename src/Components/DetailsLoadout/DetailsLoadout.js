import React, { useEffect } from "react";

import "./DetailsLoadout.scss";
import newcastle from "../../Images/newcastle.jpg";

const DetailsLoadout = () => {
  useEffect(() => {});

  const exampleLocationData = {
    name: "Newcastle",
    description: "By the Tyne",
    capacity: 1000,
    lanes: 8
  };

  const fillDetailContents = data => {
    return (
      <>
        <div>{data.description}</div>
        <table className="detailsTable">
          <tr>
            <td>Lanes</td>
            <td>{data.lanes}</td>
          </tr>
          <tr>
            <td>Capacity</td>
            <td>{data.capacity}</td>
          </tr>
        </table>
      </>
    );
  };

  return (
    <div className="locationDetailsLoadout">
      <div className="locationName">{exampleLocationData.name}</div>
      <div className="locationDetails">
        {fillDetailContents(exampleLocationData)}
      </div>
      <div className="locationImageWrapper">
        <img className="locationImage" src={newcastle} alt="Location" />
      </div>
    </div>
  );
};

export default DetailsLoadout;
