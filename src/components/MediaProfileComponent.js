import React from "react";
import { Link } from "react-router-dom";

const MediaProfile = ({ media, setActiveMedia }) => {
  return (
    <>
      <section id="media-profile-section">
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
              {/* <div>
                <p>
                  <span className="data-label">Region: </span> {country.region}
                </p>

                <p>
                  <span className="data-label">Capital: </span> {country.capital}
                </p>

                <p>
                  <span className="data-label">Top Level Domain: </span> {country.topLevelDomain[0]}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaProfile;
