import React, { useState, useEffect } from "react";
import Home from "./HomeComponent";
import MediaProfile from "./MediaProfileComponent";
import Navbar from "./NavbarComponent";
import Header from "./HeaderComponent";
import UserProfile from "./UserProfileComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
  const [queueList, setQueueList] = useState([]);
  const [activeMedia, setActiveMedia] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mediaFilter, setMediaFilter] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("queueListData")) {
      setQueueList(JSON.parse(localStorage.getItem("queueListData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("queueListData", JSON.stringify(queueList));
  }, [queueList]);

  const performSearch = () => {
    if (mediaFilter) {
      let fetchUrl = `https://www.omdbapi.com/?s=${searchString}&type=${mediaFilter}&page=${pageNumber}&apikey=1f15d0c1`;

      fetch(fetchUrl)
        .then((results) => results.json())
        .then((results) => {
          setSearchResults(results);
        })
        .catch((err) => console.log(`Error: ${err}`));
    } else {
      let fetchUrl = `https://www.omdbapi.com/?s=${searchString}&page=${pageNumber}&apikey=1f15d0c1`;

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
    setQueueList((prev) => prev.concat(itemId));
  };

  const removeItemFromQueue = (itemId) => {
    setQueueList(queueList.filter((ele) => ele !== itemId));
  };

  return (
    <>
      <ScrollToTop />
      <Navbar queueList={queueList} />
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" render={() => <Home queueList={queueList} setQueueList={setQueueList} setActiveMedia={setActiveMedia} searchString={searchString} setSearchString={setSearchString} searchResults={searchResults} setSearchResults={setSearchResults} mediaFilter={mediaFilter} setMediaFilter={setMediaFilter} performSearch={performSearch} pageNumber={pageNumber} setPageNumber={setPageNumber} />} />
        <Route exact path="/queue" render={() => <UserProfile queueList={queueList} setQueueList={setQueueList} setActiveMedia={setActiveMedia} />} />
        <Route path="/media/:mediaId" render={() => <MediaProfile media={activeMedia} setActiveMedia={setActiveMedia} queueList={queueList} setQueueList={setQueueList} addItemToQueue={addItemToQueue} removeItemFromQueue={removeItemFromQueue} />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Main;
