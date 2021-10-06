import React, { useState } from "react";
import Home from "./HomeComponent";
import MediaProfile from "./MediaProfileComponent";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  const [watchList, setWatchList] = useState([]);
  const [activeMedia, setActiveMedia] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mediaFilter, setMediaFilter] = useState(null);

  const performSearch = () => {
    if (mediaFilter) {
      fetch(`http://www.omdbapi.com/?s=${searchString}&type=${mediaFilter}&apikey=1f15d0c1`)
        .then((results) => results.json())
        .then((results) => {
          setSearchResults(results);
        })
        .catch((err) => console.log(`Error: ${err}`));
    } else {
      fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=1f15d0c1`)
        .then((results) => results.json())
        .then((results) => {
          setSearchResults(results);
        })
        .catch((err) => console.log(`Error: ${err}`));
    }
  };

  return (
    <>
      <hr />
      <Switch>
        <Route exact path="/" render={() => <Home 
            watchList={watchList} 
            setWatchList={setWatchList} 
            setActiveMedia={setActiveMedia} 
            searchString={searchString}
            setSearchString={setSearchString}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            mediaFilter={mediaFilter}
            setMediaFilter={setMediaFilter}
            performSearch={performSearch}
            />} />
        <Route path="/media/:mediaId" render={() => <MediaProfile media={activeMedia} setActiveMedia={setActiveMedia} />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Main;
