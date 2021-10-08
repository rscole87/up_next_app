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

        style={{backgroundImage: `url(${
          media.Poster === "N/A" && media.Type === "movie" ? movieIcon
        : media.Poster === "N/A" && media.Type === "game" ? gameIcon
        : media.Poster === "N/A" && media.Type === "series" ? tvIcon
        : media.Poster})` , backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
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
