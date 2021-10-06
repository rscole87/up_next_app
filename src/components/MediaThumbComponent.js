import React from "react";
import movieIcon from '../images/movie.png'
import tvIcon from '../images/tv.png'
import gameIcon from '../images/game.png'
import { Link } from "react-router-dom";

const MediaThumb = ({ media, setActiveMedia }) => {
  return (
    <Link to={`/media/${media.imdbID}`} >

    <div className="media-thumb" 
      onClick={() => {
        setActiveMedia(media)}}

        style={
         media.Poster === "N/A" && media.Type === "movie" ? {backgroundImage: `url(${movieIcon}`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }
        : media.Poster === "N/A" && media.Type === "game" ? {backgroundImage: `url(${gameIcon}`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }
        : media.Poster === "N/A" && media.Type === "series" ? {backgroundImage: `url(${tvIcon}`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }
        : {backgroundImage: `url(${media.Poster}`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }
        }
      >
        
      <div className="media-heading-div">
        <h3>
          {media.Title} ({media.Year})
        </h3>
      </div>
    </div>
    </Link>
  );
};

export default MediaThumb;
