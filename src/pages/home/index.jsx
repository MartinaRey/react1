import "./home.css";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [resultado, setResultado] = useState(0);
  const [anime, setAnime] = useState({});

  const animeApi = async () => {
    const respuesta = await axios.get(
      "https://animechan.vercel.app/api/random"
    );
    setAnime(respuesta.data);
  };

  const suma = () => {
    const sumar = resultado + 1;
    setResultado(sumar);
  };
  const resta = () => {
    const restar = resultado - 1;
    setResultado(restar);
  };

  return (
    <div className="home">
      <div className="letras">
        <h1>{resultado}</h1>
        <h1>{anime.anime}</h1>
        <h1>{anime.character}</h1>
        <p>{anime.quote}</p>
        <button onClick={resta}>boton -</button>
        <button onClick={suma}>boton +</button>
        <button onClick={animeApi}>anime random</button>
      </div>
    </div>
  );
}

export default Home;
