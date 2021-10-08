import React, { useState, useEffect } from "react";
import MediaThumb from "./MediaThumbComponent";
import { Link } from "react-router-dom";

const UserProfile = (props) => {
  const [thumbList, setThumbList] = useState([]);

  const performSearch = (id) => {
    let fetchUrl = `http://www.omdbapi.com/?i=${id}&apikey=1f15d0c1`;
    fetch(fetchUrl)
      .then((results) => results.json())
      .then((results) => {
        setThumbList((prev) => prev.concat(results));
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  useEffect(() => {
    props.queueList.forEach((id) => {
      performSearch(id);
    });
  }, []);

  let queueThumbs = thumbList.map((ele) => {
    return <MediaThumb media={ele} setActiveMedia={props.setActiveMedia} />;
  });

  return (
    <section id="user-profile-section">
      <div className="container">
        <h2>Your List</h2>
        <div>
          <Link to="/">
            <button className="back-bttn">
              <i className="fa fa-long-arrow-left" />
              {` `} Back
            </button>
          </Link>
        </div>
        <div id="queue-display-div">{queueThumbs}</div>
      </div>
    </section>
  );
};

export default UserProfile;
