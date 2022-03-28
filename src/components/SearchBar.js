import React, { useState } from "react";

/*

          <App />
          stateOfSearchTerm:[]
          
          L>

< SeachBar /> < StudentList />

*/

function SearchBar( { searchTerm , updateSearchTerm } ) {

  function handleChange( synthEvent ){

    updateSearchTerm( synthEvent.target.value )
    // console.log( "synthEvent.target.value: " , synthEvent.target.value )  //

  }
  return (
    <div className="search">
      
      <input onChange={ handleChange } />
      
    </div>
  );
}
export default SearchBar;
