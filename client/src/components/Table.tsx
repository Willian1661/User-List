import React from "react";
import User from "../interfaces/Users";
// import { fetchData } from "../api/api";
import Modal from "./Modal";
// import showProperties from "../services/showProperties";
interface prop {
  data: User[]
}
// const { user } = await fetchData();
// console.log(showProperties(user));

const Table: React.FC<prop> = ({ data }) => (
  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th><abbr title="UserName">UN</abbr></th>
        <th><abbr title="Email">E</abbr></th>
        <th className="is-flex">
          <Modal
            children={<abbr title="Adress">Add</abbr>}
          />
          <i className="fas fa-angle-down mx-3" aria-hidden="true"></i>
        </th>
        <th><abbr title="Phone">PH</abbr></th>
        <th><abbr title="WebSite">WB</abbr></th>
        <th><abbr title="Company">CO</abbr><i className="fas fa-angle-down mx-3" aria-hidden="true"></i></th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th><abbr title="UserName">UN</abbr></th>
        <th><abbr title="Email">E</abbr></th>
        <th><abbr title="Adress">Add</abbr></th>
        <th><abbr title="Phone">PH</abbr></th>
        <th><abbr title="WebSite">WB</abbr></th>
        <th><abbr title="Company">CO</abbr></th>
      </tr>
    </tfoot>
    <tbody>
      {data.map(userData => (
        <tr key={userData.id}>
          <th>{userData.id}</th>
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
export default Table;