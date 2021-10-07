import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MediaProfile = ({ media, setActiveMedia }) => {
  const [plotSummary, setPlotSummary] = useState("");
  const [actors, setActors] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [rated, setRated] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [runTime, setRunTime] = useState("");
  const [imdbRating, setImdbRating] = useState("");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${media.imdbID}&plot=full&apikey=1f15d0c1`)
      .then((results) => results.json())
      .then((results) => {
        console.log(results);
        setPlotSummary(results.Plot);
        setActors(results.Actors);
        setDirector(results.Director);
        setGenre(results.Genre);
        setRated(results.Rated);
        setReleaseDate(results.Released);
        setRunTime(results.Runtime);
        setImdbRating(results.imdbRating);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <>
      <section id="media-profile-section">
        <div className="container">
          <div>
            <Link to="/">
              <button className="back-bttn" onClick={() => setActiveMedia(null)}>
                <i className="fa fa-long-arrow-left" />
                {` `} Back
              </button>
            </Link>
          </div>

          <div className="profile-content">
            <div className="media-poster-div">
              <img src={media.Poster} alt={media.Title} />
            </div>

            <div className="profile-text-div">
              <div className="profile-header-div">
                <h2>{media.Title}</h2>
              </div>

              <div className="profile-stats-div">
                <div>
                  <p>
                    <span className="data-label">Director: </span> {director}
                  </p>

                  <p>
                    <span className="data-label">Actors: </span> {actors}
                  </p>
                  
                  <p>
                    <span className="data-label">Released: </span> {releaseDate}
                  </p>
                  
                  <p>
                    <span className="data-label">Rated: </span> {rated}
                  </p>
                  
                  <p>
                    <span className="data-label">Runtime: </span> {runTime}
                  </p>

                  <p>
                    <span className="data-label">Genre: </span> {genre}
                  </p>

                  <p>
                    <span className="data-label">IMDB Rating: </span> {imdbRating}
                  </p>

                  <div>
                    <p>{plotSummary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaProfile;
