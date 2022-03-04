import React from "react";
import moment from "moment";

export default function FlowerList(props) {
  const flowerData = props.flowerData;

  return (
    <div className="FlowerData">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {flowerData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.flowerName}</td>
                <td>{val.percentage}</td>
                <td>{moment(val.date).format("YYYY-MM-DD")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
