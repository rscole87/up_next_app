import React, { useState, useEffect } from "react";

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const performSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=1f15d0c1`)
    .then(results => results.json())
    .then(results =>{ 
      setSearchResults(results)
      setSearchString('')
    })
    .catch(err => console.log(`Error: ${err}`))

    console.log(searchResults)
  }

  return (
    <>
      <div>
      <form action="" onSubmit={(e) =>{ 
        e.preventDefault()
        performSearch()
      }}>
        <input type="text" onChange={(e) => setSearchString(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  )
  
};

export default Home;
