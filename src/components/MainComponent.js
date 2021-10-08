import React, { useState, useEffect } from "react";
import Home from "./HomeComponent";
import MediaProfile from "./MediaProfileComponent";
import Navbar from "./NavbarComponent";
import Header from "./HeaderComponent";
import UserProfile from "./UserProfileComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
  const [queueList, setQueueList] = useState(["tt2262308", "tt0494232", "tt0879874", "tt1225687"]);
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

  const addItemToQueue = (itemId) => {
    setQueueList(prev => prev.concat(itemId))
  }

  const removeItemFromQueue = (itemId) => {
    setQueueList(prev => {
      prev.filter(ele => ele !== itemId)
    })
  }

  return (
    <>
      <ScrollToTop />
      <Navbar queueList={queueList} setQueueList={setQueueList} />
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" render={() => <Home queueList={queueList} setQueueList={setQueueList} setActiveMedia={setActiveMedia} searchString={searchString} setSearchString={setSearchString} searchResults={searchResults} setSearchResults={setSearchResults} mediaFilter={mediaFilter} setMediaFilter={setMediaFilter} performSearch={performSearch} pageNumber={pageNumber} setPageNumber={setPageNumber} />} />
        <Route exact path="/queue" render={() => <UserProfile queueList={queueList} setQueueList={setQueueList} setActiveMedia={setActiveMedia} />} />
        <Route path="/media/:mediaId" render={() => <MediaProfile media={activeMedia} setActiveMedia={setActiveMedia} />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Main;
