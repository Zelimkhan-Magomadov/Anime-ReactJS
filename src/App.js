import "./App.css";
import Header from "./component/Header";
import AnimeCard from "./component/AnimeCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ANIME_LIST_URL = "https://a6d750aa6c909f56.mokky.dev/anime-list";

function App() {
  const [animeItems, setAnimeItems] = useState([]);

  useEffect(() => {
    const getAnimeList = async () => {
      const { data } = await axios.get(ANIME_LIST_URL);
      setAnimeItems(data);
    };
    getAnimeList();
  }, []);

  useEffect(() => {
    getNextAnime();
  });

  const [animeItem, setAnimeItem] = useState();

  function getNextAnime() {
    const randomIndex = Math.floor(Math.random() * animeItems.length);
    setAnimeItem(animeItems[randomIndex]);
  }

  return (
    <div className="App">
      <Header />
      <AnimeCard
        onClick={getNextAnime}
        imageUrl={animeItem?.image_link}
        title={animeItem?.anime_name}
      />
    </div>
  );
}

export default App;
