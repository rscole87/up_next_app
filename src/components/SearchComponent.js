import React from 'react'

const SearchArea = (props) => {
    return (
        <form
        action="GET"
        onSubmit={(e) => {
          e.preventDefault();
          props.performSearch();
          props.setSearchString("");
        }}
      >
        <input type="text" value={props.searchString} onChange={(e) => props.setSearchString(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
        )
}

export default SearchArea;