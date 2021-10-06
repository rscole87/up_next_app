import React, { useState } from "react";

const SearchArea = (props) => {
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <>
      <section id="search-section">
        <div id="search-inputs-div" className="container">
          <div id="search-box-div">
            <form
              action="GET"
              onSubmit={(e) => {
                e.preventDefault();
                props.setPageNumber(1);
                props.performSearch();
              }}
            >
              <input type="text" placeholder="&#xF002;  Search for a title..." value={props.searchString} onChange={(e) => props.setSearchString(e.target.value)} />
              <button type="submit">Search</button>
            </form>
          </div>

          <div id="custom-select">
            <div id="custom-select-header" onClick={() => setSelectOpen(!selectOpen)}>
              <div>
                <span>{props.mediaFilter === "series" ? "TV" : props.mediaFilter === "game" ? "Games" : props.mediaFilter === "movie" ? "Movies" : "Filter by media"}</span>
              </div>
              <div>
                <span>{selectOpen ? <i className="fa fa-chevron-up" /> : <i className="fa fa-chevron-down" />}</span>
              </div>
            </div>
            <div id="custom-select-dropdown" style={selectOpen ? { height: "200px" } : { height: "0px" }}>
              <div
                onClick={() => {
                  props.setMediaFilter(null);
                  setSelectOpen(false);
                }}
              >
                <span className="custom-select-dropdown-option">All Media</span>
              </div>

              <div
                onClick={() => {
                  props.setMediaFilter("movie");
                  setSelectOpen(false);
                }}
              >
                <span className="custom-select-dropdown-option">Movies</span>
              </div>

              <div
                onClick={() => {
                  props.setMediaFilter("series");
                  setSelectOpen(false);
                }}
              >
                <span className="custom-select-dropdown-option">TV</span>
              </div>

              <div
                onClick={() => {
                  props.setMediaFilter("game");
                  setSelectOpen(false);
                }}
              >
                <span className="custom-select-dropdown-option">Games</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
};

export default SearchArea;
