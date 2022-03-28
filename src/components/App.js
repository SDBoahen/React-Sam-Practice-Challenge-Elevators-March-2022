// import React from "react";
import { useEffect, useState } from "react"

import Header from "./Header";

import StudentsList from "./StudentsList";

import SearchBar from "./SearchBar";
  import Student from "./Student";
import FirstFloor from "./Floors/FirstFloor";

function App() {
  //// js


    const [ studentArrayOfObjs , setStudentArrayOfObjs ] = useState(  [ ]  )
      console.log( "State of  studentArrayOfObjs: " , studentArrayOfObjs )  //

      const handleStudentsGETFetch =()=>{
        
        fetch(  "http://localhost:3008/students"  )
        .then(  function(response){ return response.json() }  )
        .then(  ( fetchedArrayOfStudentObjs ) => {  
          
          console.log( "From Fetch: " , fetchedArrayOfStudentObjs )  //
    
          setStudentArrayOfObjs(  fetchedArrayOfStudentObjs  )
    
        }  )

      }
    useEffect(  handleStudentsGETFetch , [ ]  )


    const [ searchTerm , updateSearchTerm ] = useState( "" )
    console.log( "State of searchTerm: " , searchTerm )  //
    //// < SearchBar />


  //// js
  return (
    <div>
      <Header />

      <SearchBar  searchTerm={ searchTerm }  updateSearchTerm={ updateSearchTerm } />

      <h1>Lobby</h1>

        <StudentsList studentsToMap={ studentArrayOfObjs } searchTerm={ searchTerm }   />

      <br/><br/><br/><br/>

      <FirstFloor />

    </div>
  );
}

export default App;




/*




  ////  Map of this Challenge

      <Header />


      <SearchBar />


        <h1>Lobby</h1>
        <StudentsList />
        L> 
          < Student />
          {

            [].map

          }





      <br/><br/><br/><br/>


      < FirstFloor />
      L>
        < SecondFloor />
        L>
          < Third Floor />


  ////  Map of this Challenge



  -------- DELIVERABLE 1 ✅

  - See list of students on the page, using the `Student` component in `App`, beneth the `h1` Detailing: Lobby. 

    - See list  : (  ~ itteration : .map()  )
    of students : [ { name: "" }{}{} ]
    on the page : ( ~ "slap it on the DOM" / render it ), 

    using the `Student` component in `App`, 
    beneth the `h1` Detailing: Lobby.


      <App.js />

        [ { name: "" }{}{} ].map( < Student />  )

        fetch( "/students" ).then( response => response.json() ).then( console.log )


          

            .useState() : state of data
            .useEffect() : component's life cycle : mounting / first showing up on the dom / first render

            
            fetch( "/students" ).then( response => response.json() ).then( console.log )

            [ { name: "" }{}{} ].map( < Student />  )

          


    ----

    The `Student` component should display the Student's image, name, bio, and conditionally render if that Student is Checked-in OR Not. If they are Checked-In Card should say "Checked-in! :)", otherwise it should say "Not Checked-in".
    
    The `Student` component should display : ( ~ render)
    the Student's image, name, bio, and 

    conditionally render if that Student is Checked-in OR Not.

    If 
      they are Checked-In Card should say "Checked-in! :)", 
      otherwise it should say "Not Checked-in".

      if else
      variable ? true : false

    *** CONDITIONAL RENDERING 

  -------- DELIVERABLE 2 ✅

  - Click on the image of the Student in the `Student` component and see the
    Student's current Phase in place of their bio. If I click on the image again,
    the Student's current Phase should again be replaced with the bio. 
    If I click on another Student's image, it toggles that Student's bio independent of any other Student's.

    *** TOGGLES

  -------- DELIVERABLE 3

  - Clicking on the "Head to Room :)" button should render that Student on the correct Floor. That Student should then no longer be in the Lobby.

    *** DELETION ON THE DOM / React is with .filter

  -------- DELIVERABLE 4 ✅

  - Type in the `SearchBar` component and see the list of students IN THE LOBBY whose name or bio match the text in the search bar. If there's no text in the search bar, all the students should be rendered.
  
    - Type in the `SearchBar` component
    and see the list of students IN THE LOBBY 
    whose 
    
      name OR bio 
    
    match the text in the search bar. 
    
    If there's no text in the search bar, all the students should be rendered.

  --------


*/
