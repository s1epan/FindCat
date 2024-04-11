import { useEffect } from "react";
import { useState } from "react";
import "./Search.css";

function Search(props) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      props.func(value);
    }
  };

  return (
    <div className="search">
      <input
        placeholder="search breed"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
      />
      <button onClick={() => props.func(value)} className="search-btn">
        Search
      </button>
    </div>
  );
}

export default Search;
