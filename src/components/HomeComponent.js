import React, { useState, useEffect } from "react";
import SearchArea from "./SearchComponent";
import ResultsArea from "./ResultsComponent";

const Home = (props) => {
  

  return (
    <>
      <SearchArea searchString={props.searchString} setSearchString={props.setSearchString} performSearch={props.performSearch} mediaFilter={props.mediaFilter} setMediaFilter={props.setMediaFilter} setPageNumber={props.setPageNumber} />
      <ResultsArea searchResults={props.searchResults.Search} mediaFilter={props.mediaFilter} setActiveMedia={props.setActiveMedia} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber} />
    </>
  );
};

export default Home;
