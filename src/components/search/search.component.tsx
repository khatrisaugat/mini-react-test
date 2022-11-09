import "./search.styles.css";
import { useState } from "react";

type Props = {};

function Search({}: Props) {
  const [search, setSearch] = useState("");
  return (
    <div className="form-group">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <i className="fa fa-search"></i>
    </div>
  );
}

export default Search;
