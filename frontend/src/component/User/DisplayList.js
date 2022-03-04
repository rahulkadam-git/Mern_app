import React from "react";
import { Link } from "react-router-dom";

export default function DisplayList(props) {
  const allUsers = props.userData;

  return (
    <div className="AllUsers">
      <table>
        <thead>
          <tr>
            <th>ECode</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Usertype</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((val, key) => {
            return (
              <tr key={val._id}>
                <td>
                  <Link to={`/userdetails/${val._id}`}>{val.eCode}</Link>
                </td>
                <td>{val.name}</td>
                <td>{val.surname}</td>
                <td>{val.userType}</td>
                <td>{val.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
