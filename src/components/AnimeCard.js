import React from "react";
import "./Anime.css";

function AnimeCard({ anime }) {
  return (
    <article className="animeCard">
      <a className="link" href={anime.url} target="_blank" rel="noreferrer">
        <img
          className="animePic"
          src={anime.images.jpg.image_url}
          alt="Anime Image"
          width="225"
          height="314"
        />
        <div className="titleContainer">
          <h3 className="animeTitle">{anime.title}</h3>
        </div>
      </a>
    </article>
  );
}

export default AnimeCard;
