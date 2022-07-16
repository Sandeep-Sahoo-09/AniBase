import React from "react";
import AnimeCard from "./AnimeCard";
import "./Anime.css";

function MainContainer({ animeList }) {
  // console.log(animeList);
  return (
    <div className="mainanimeContainer">
      {/* <h2>Most Popular Animes:</h2> */}
      <div className="animeContainer">
        {animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </div>
  );
}

export default MainContainer;
