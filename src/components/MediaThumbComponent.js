import React from "react";
import { Link } from "react-router-dom";

const MediaThumb = ({ media, setActiveMedia }) => {
  return (
    <Link to={`/media/${media.imdbID}`} >

    <div className="media-thumb" 
      onClick={setActiveMedia(media)}
      style={{ backgroundImage: `url(${media.Poster})`, backgroundPosition: "center", backgroundSize: "cover" }}>
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
