import { useEffect } from "react";
import { useState } from "react";
import "./Select.css";

function Select(props) {
  const [value, setValue] = useState("");
  const [breeds, setBreeds] = useState("");

  useEffect(() => {
    setBreeds(props.breeds);
  });

  return (
    <div className="select">
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option>Choose</option>
        {breeds ? (
          breeds.map((el) => <option key={el.id}>{el.id}</option>)
        ) : (
          <option>...</option>
        )}
      </select>
    </div>
  );
}

export default Select;
