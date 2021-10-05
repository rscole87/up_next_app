import React from "react";

const MovieThumb = ({ movie }) => {
  return (
    <div className="movie-thumb" style={{backgroundImage: `url(${movie.Poster})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <h3>{movie.Title} ({movie.Year})</h3>
      
    </div>
  );
};

export default MovieThumb;
