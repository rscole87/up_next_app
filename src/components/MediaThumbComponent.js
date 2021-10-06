import React from "react";

const MediaThumb = ({ media }) => {
  return (
    <div className="media-thumb" style={{ backgroundImage: `url(${media.Poster})`, backgroundPosition: "center", backgroundSize: "cover" }}>
      <div className="media-heading-div">
        <h3>
          {media.Title} ({media.Year})
        </h3>
      </div>
    </div>
  );
};

export default MediaThumb;
