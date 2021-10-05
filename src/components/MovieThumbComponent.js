import React from "react";

const MovieThumb = ({ movie }) => {
  return (
    <div className="movie-thumb">
      <h3>{movie.Title}</h3>
    </div>
  );
};

export default MovieThumb;
