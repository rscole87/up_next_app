import React, { useEffect, useState } from "react";
import movieIcon from '../images/movie.png'
import tvIcon from '../images/tv.png'
import gameIcon from '../images/game.png'
import { Link } from "react-router-dom";

const MediaProfile = (props) => {
  const [plotSummary, setPlotSummary] = useState("");
  const [actors, setActors] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [rated, setRated] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [runTime, setRunTime] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [isInQueue, setIsInQueue] = useState(props.queueList.includes(props.media.imdbID))

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${props.media.imdbID}&plot=full&apikey=1f15d0c1`)
      .then((results) => results.json())
      .then((results) => {
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
              <button className="back-bttn" onClick={() => props.setActiveMedia(null)}>
                <i className="fa fa-long-arrow-left" />
                {` `} Back
              </button>
            </Link>
          </div>

          <div className="profile-content">
            <div className="media-poster-div">
              <img src={
                props.media.Poster === "N/A" && props.media.Type === "movie" ? movieIcon
              : props.media.Poster === "N/A" && props.media.Type === "game" ? gameIcon
              : props.media.Poster === "N/A" && props.media.Type === "series" ? tvIcon
              : props.media.Poster
              } alt={props.media.Title} />
            </div>

            <div className="profile-text-div">
              <div className="profile-header-div">
                <div>
                <h2>{props.media.Title}</h2>
                </div>
                <div>
                  {isInQueue ? <button className="queue-add-bttn" onClick={() => {
                    props.removeItemFromQueue(props.media.imdbID)
                    setIsInQueue(!isInQueue)
                    }}>Remove from queue</button>
                  : <button className="queue-add-bttn" onClick={() => {
                    props.addItemToQueue(props.media.imdbID)
                    setIsInQueue(!isInQueue)
                    }}>Add to queue</button>
                  }
                </div>

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
