import React, { useState, useEffect } from "react";
import SearchArea from "./SearchComponent";
import ResultsArea from "./ResultsComponent";

const Home = (props) => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=1f15d0c1`)
      .then((results) => results.json())
      .then((results) => {
        setSearchResults(results);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  return (
    <>
      <SearchArea searchString={searchString} setSearchString={setSearchString} performSearch={performSearch} />
      <ResultsArea searchResults={searchResults.Search} />
    </>
  );
};

export default Home;
