import React, { useEffect } from "react";

import "./Table.scss";

const Table = () => {
  useEffect(() => {});

  const exampleData = [
    { name: "A", performance: 43.54 },
    { name: "B", performance: 73.65 },
    { name: "C", performance: 37.29 },
    { name: "D", performance: 19.56 }
  ];
  let tableContents = data => (
    <tbody>
      {data.map(d => (
        <tr>
          <td>{d.name}</td>
          <td>{d.performance}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
      <table className="performanceTable">
        <tr>
          <th>Blue</th>
          <th>Red</th>
        </tr>
        {tableContents(exampleData)}
      </table>
    </div>
  );
};

export default Table;
