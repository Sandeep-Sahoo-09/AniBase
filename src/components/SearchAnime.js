import React from "react";
import "./Anime.css";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
function SearchAnime(props) {
  return (
    <div className="search_bar">
      <form onSubmit={props.searchHandler}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default SearchAnime;
