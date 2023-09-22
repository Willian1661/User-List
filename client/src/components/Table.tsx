import React from "react";
import User from "../interfaces/Users";
import ModalAddress from "./ModalAddress";
import ModalCompany from "./ModalCompany";
interface prop {
  data: User[]
}

const Table: React.FC<prop> = ({ data }) => {

  const user = data[0];
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th className="is-flex is-clickable">
            <ModalAddress children='Address' data={user.address} />
          </th>
          <th>PH</th>
          <th>WB</th>
          <th className="is-flex is-clickable">
            <ModalCompany children='Company' data={user.company} />
          </th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          {
            Object.keys(user).map(key => <th key={key}>{key}</th>)
          }

        </tr>
      </tfoot>
      <tbody>
        {data.map(userData => (
          <tr key={userData.id}>
            <td>{userData.id}</td>
            <td><strong>{userData.name}</strong></td>
            <td>{userData.username}</td>
            <td>{userData.email}</td>
            <td>{userData.address.city}</td>
            <td>{userData.phone}</td>
            <td>{userData.website}</td>
            <td>{userData.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;