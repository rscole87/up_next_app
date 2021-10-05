import React from "react";
import MovieThumb from "./MovieThumbComponent";

const ResultsArea = ({ searchResults }) => {
  if (searchResults) {
    let movieKeys = [];
    
    let thumbs = searchResults.map((movie) => {
      console.log(movie);
      if(!movieKeys.includes(movie.imdbID)){
        movieKeys.push(movie.imdbID)
        return <MovieThumb movie={movie} key={movie.imdbID} />;
      }
    });

    return (
      <>
        <section id="results-section">
          <div id="results-display-div">{thumbs}</div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section id="results-section"></section>
      </>
    );
  }
};

export default ResultsArea;
