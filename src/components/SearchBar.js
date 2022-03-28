import React from "react";

function SearchBar( { updateSearchTerm } ) {

  function changeHandler( synthEvent ){

    updateSearchTerm( synthEvent.target.value )

  }

  return (
    <div className="search">

      < input onChange={ changeHandler } />

    </div>
  );
}

export default SearchBar;
