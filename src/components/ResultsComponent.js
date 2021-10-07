import React from "react";
import MediaThumb from "./MediaThumbComponent";
import ScrollToTop from "./ScrollToTop";

const ResultsArea = ({ searchResults, mediaFilter, setActiveMedia, pageNumber, setPageNumber }) => {
  const incrementPageNumber = () => {
    setPageNumber((prev) => prev + 1);
  };

  const decrementPageNumber = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  if (searchResults) {
    let mediaKeys = [];

    let thumbs = searchResults.map((media) => {
      if (!mediaKeys.includes(media.imdbID)) {
        mediaKeys.push(media.imdbID);
        return <MediaThumb media={media} key={media.imdbID} setActiveMedia={setActiveMedia} />;
      }
    });

    return (
      <>
        <ScrollToTop />

        <section id="results-section">
          <div className="container">
            <div>
              <h2>{mediaFilter === undefined ? "Filter by media" : mediaFilter === "game" ? "Games" : mediaFilter === "movie" ? "Movies" : "TV"}</h2>
            </div>
            <div id="results-display-div">{thumbs}</div>
            <div className="pagination-nav-div">
              <button onClick={() => decrementPageNumber()}>
                <i className="fa fa-long-arrow-left" />{" "}
                Prev
              </button>
              <button onClick={() => incrementPageNumber()}>
                Next{" "}
                <i className="fa fa-long-arrow-right" />
              </button>
            </div>
          </div>
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
