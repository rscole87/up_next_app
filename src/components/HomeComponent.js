import React, { useState, useEffect } from "react";
import ResultsArea from "./ResultsComponent";

const Home = () => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=1f15d0c1`)
      .then((results) => results.json())
      .then((results) => {
        setSearchResults(results);
        console.log(searchString)
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  return (
    <>
      <form
        action="GET"
        onSubmit={(e) => {
          e.preventDefault();
          performSearch();
          setSearchString("");
        }}
      >
        <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <ResultsArea searchResults={searchResults.Search} />
    </>
  );
};

export default Home;
