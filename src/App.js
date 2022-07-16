import { useState, useEffect } from "react";
// import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SearchAnime from "./components/SearchAnime";
import "./components/Anime.css";

function App() {
  const [animelist, setAnimelist] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("Most Popular Anime:");

  const searchHandler = (e) => {
    e.preventDefault();
    searchAnime(search);
  };

  // const resultChange = () => {
  //   console.log(animelist.length);
  // };

  const getAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
    ).then((res) => res.json());
    setAnimelist(temp.data.slice(0, 15));
  };

  const searchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&orde_by=populariry&sort=asc&sfw=true&limit=10`
    ).then((res) => res.json());
    setAnimelist(temp.data);
    setSearch("");

    // console.log(temp.data.length);

    if (temp.data.length !== 0) {
      setResult("Search Result:");
    } else if (temp.data.length === 0) {
      setResult("No Results!!");
    }
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchAnime
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <h3 className="dynamic_text">{result}</h3>
      <MainContainer animeList={animelist} />
    </div>
  );
}

export default App;
