import React from "react";
import MovieThumb from "./MovieThumbComponent";

const ResultsArea = ({ searchResults }) => {
  if (searchResults) {
    let thumbs = searchResults.map((movie) => {
        console.log(movie)
      return <MovieThumb movie={movie} key={movie.imdbID}/>;
    });

    return (
      <>
        <section id="results-section">{thumbs}</section>
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
