import React from "react";
import User from "../interfaces/Users";

interface prop {
  data: Promise<User[]>
}
const Table: React.FC<prop> = ({ data }) => {
  const [tableData, setTableData] = React.useState<User[]>([]); // two const that receive state as User[] interface

  React.useEffect(() => { //side effect function
    const fetchData = async () => { // this const receives a async function to return api response
      const resolvedData = await data
      setTableData(resolvedData)
    };
    fetchData()
  }, [data]);

  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
      <thead>
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
        {tableData.map(userData => (
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
};
export default Table;