import "./table.styles.css";
import TableRow from "./../table-row/table-row.component";

type Props = {};

function Table({}: Props) {
  return (
    <div className="table">
      <TableRow isHeader={true} />
      <TableRow />
      <TableRow />
    </div>
  );
}

export default Table;
