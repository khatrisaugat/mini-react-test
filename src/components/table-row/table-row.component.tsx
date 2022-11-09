import "./table-row.styles.css";
import Checkbox from "./../checkbox/checkbox.component";
type Props = {};
function TableRow(Props: { isHeader?: boolean }) {
  return (
    <div className={`table-row ${Props.isHeader ? "header-row" : ""}`}>
      <Checkbox />
      <div className="table-cell">Name</div>
      <div className="table-cell">Username</div>
      <div className="table-cell">Email</div>
      <div className="table-cell">Phone</div>
      <div className="table-cell">Website</div>
      <div className="table-cell">Address</div>
    </div>
  );
}

export default TableRow;
