import "./search.styles.css";
import { useState } from "react";

type Props = {};

function Search(Props: { handleChange: (search: string) => void }) {
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    Props.handleChange(e.target.value);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
      <i className="fa fa-search"></i>
    </div>
  );
}

export default Search;
