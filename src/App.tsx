import "./App.css";
import Search from "./components/search/search.component";
import Button from "./components/button/button.component";
import Table from "./components/table/table.component";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleChange = (search: string) => {
    setSearch(search);
    console.log("search", search);
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Users</h1>
        <div className="form-group">
          <Search handleChange={handleChange} />
        </div>
        <Button />
      </div>
      <Table search={search} />
    </div>
  );
}

export default App;
