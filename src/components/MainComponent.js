import React, { useState, useEffect } from "react";
import Home from "./HomeComponent";
import MediaProfile from "./MediaProfileComponent";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
  const [watchList, setWatchList] = useState([]);
  const [activeMedia, setActiveMedia] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mediaFilter, setMediaFilter] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const performSearch = () => {
    if (mediaFilter) {
      let fetchUrl = `http://www.omdbapi.com/?s=${searchString}&type=${mediaFilter}&page=${pageNumber}&apikey=1f15d0c1`;

      fetch(fetchUrl)
        .then((results) => results.json())
        .then((results) => {
          setSearchResults(results);
        })
        .catch((err) => console.log(`Error: ${err}`));
    } else {
      let fetchUrl = `http://www.omdbapi.com/?s=${searchString}&page=${pageNumber}&apikey=1f15d0c1`;

      fetch(fetchUrl)
        .then((results) => results.json())
        .then((results) => {
          setSearchResults(results);
        })
        .catch((err) => console.log(`Error: ${err}`));
    }
  };

  useEffect(() => {
    performSearch();
  }, [pageNumber, mediaFilter]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" render={() => <Home watchList={watchList} setWatchList={setWatchList} setActiveMedia={setActiveMedia} searchString={searchString} setSearchString={setSearchString} searchResults={searchResults} setSearchResults={setSearchResults} mediaFilter={mediaFilter} setMediaFilter={setMediaFilter} performSearch={performSearch} pageNumber={pageNumber} setPageNumber={setPageNumber} />} />
        <Route path="/media/:mediaId" render={() => <MediaProfile media={activeMedia} setActiveMedia={setActiveMedia} />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Main;
