import React from "react";
import MediaThumb from "./MediaThumbComponent";

const ResultsArea = ({ searchResults, mediaFilter, setActiveMedia }) => {
  if (searchResults) {
    let mediaKeys = [];

    let thumbs = searchResults.map((media) => {
      console.log(media);
      if (!mediaKeys.includes(media.imdbID)) {
        mediaKeys.push(media.imdbID);
        return <MediaThumb media={media} key={media.imdbID} setActiveMedia={setActiveMedia}/>;
      }
    });

    return (
      <>
        <section id="results-section">
          <div>
            <h2>{mediaFilter === undefined ? "Filter by media" : mediaFilter === "game" ? "Games" : mediaFilter === "movie" ? "Movies" : "TV"}</h2>
          </div>
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
