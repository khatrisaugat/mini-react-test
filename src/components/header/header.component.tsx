import "./header.styles.css";
import Button from "../button/button.component";
import Search from "./../search/search.component";

type Props = {};

function Header({}: Props) {
  return (
    <div className="header">
      <h1>Users</h1>
      <div className="form-group">
        <Search />
      </div>
      <Button />
    </div>
  );
}

export default Header;
