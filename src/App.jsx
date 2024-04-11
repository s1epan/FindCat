import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.thecatapi.com/v1/breeds",
    }).then((res) => setBreeds(res.data));

    axios({
      url: "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=abys&api_key=live_zTAeZXdGUAsEKJUNFfnkzLVLVb4b4lm7VZNKxff3Q7Xsgxs0gf3tPHtpm32X2rp9",
    }).then((res) => setCats(res.data));
  }, []);

  const searchBreeds = (str) => {
    axios({
      url: `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${str}&api_key=live_zTAeZXdGUAsEKJUNFfnkzLVLVb4b4lm7VZNKxff3Q7Xsgxs0gf3tPHtpm32X2rp9`,
    }).then((res) => setCats(res.data));
    console.log(str);
  };

  return (
    <>
      <Container breeds={breeds} func={searchBreeds} cats={cats} />
    </>
  );
}

export default App;
