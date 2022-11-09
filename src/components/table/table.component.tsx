import "./table.styles.css";
import TableRow from "./../table-row/table-row.component";
import { useFetchUsers } from "../../requests/useRequest";
import { useState, useEffect } from "react";

type Props = {};

function Table(Props: { search: string }) {
  const { isError, isLoading, isSuccess, data } = useFetchUsers();
  const [users, setUsers] = useState([]);
  const { search } = Props;
  useEffect(() => {
    if (isSuccess) {
      setUsers(data.data);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (users.length > 0) {
      const sortedUsers = users.sort((a, b) =>
        JSON.stringify(a).toLowerCase().match(search) ? -1 : 1
      );
      setUsers(sortedUsers);
    }
  }, [search]);
  return (
    <div className="table">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}

      <TableRow isHeader={true} />
      {isSuccess &&
        users.map((user: any) => <TableRow user={user} key={user.id} />)}
    </div>
  );
}

export default Table;
