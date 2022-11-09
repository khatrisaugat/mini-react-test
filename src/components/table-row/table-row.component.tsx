import "./table-row.styles.css";
import Checkbox from "./../checkbox/checkbox.component";
import userEvent from "@testing-library/user-event";
type Props = {};
function TableRow(Props: { isHeader?: boolean; user?: any }) {
  const { isHeader, user } = Props;
  return (
    <div className={`table-row ${isHeader ? "header-row" : ""}`}>
      <Checkbox checkAll={isHeader} />
      <div className="table-cell">{isHeader ? "Name" : user.name}</div>
      <div className="table-cell">{isHeader ? "Username" : user.username}</div>
      <div className="table-cell">{isHeader ? "Email" : user.email}</div>
      <div className="table-cell">{isHeader ? "Phone" : user.phone}</div>
      <div className="table-cell">{isHeader ? "Website" : user.website}</div>
      <div className="table-cell">
        {isHeader ? "Address" : user.address.street}
      </div>
    </div>
  );
}

export default TableRow;
