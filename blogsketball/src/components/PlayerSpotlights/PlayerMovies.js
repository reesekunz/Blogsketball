import React from "react";

function PlayerMovies(props) {
  return (
    <ul>
      {props.player.movies.map(movie => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  );
}

export default PlayerMovies;
