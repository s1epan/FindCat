import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.thecatapi.com/v1/breeds",
    }).then((res) => setBreeds(res.data));
  }, []);

  return (
    <>
      <Container breeds={breeds} />
    </>
  );
}

export default App;
