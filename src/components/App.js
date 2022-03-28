import React, { useState , useEffect } from "react";

import Header from "./Header";

import StudentsList from "./StudentsList";

import SearchBar from "./SearchBar";
import Student from "./Student";
import FirstFloor from "./Floors/FirstFloor";

function App() {

  console.log( "---------------APP JUST RERENDERED-----------------")  //

  const [ arrayOfStudents , setArrayOfStudents ] = useState(  [  ]  )
    console.log( "State of arrayOfStudents: " , arrayOfStudents )  //

    
    const studentsGETFetch =()=>{

      fetch( "http://localhost:3008/students" )
      .then( response => response.json() )
      .then( (data) => { 
      
        setArrayOfStudents( data )
      
      } )

    }
  useEffect( studentsGETFetch , [ ] )




  const [ studentsOnFirstFloor , setStudentsOnFirstFloor ] = useState(  [ ]  )
    console.log( "State of studentsOnFirstFloor: " , studentsOnFirstFloor )  //
      const [ studentsOnSecondFloor , setStudentsOnSecondFloor ] = useState(  [ ]  )
        console.log( "State of studentsOnSecondFloor: " , studentsOnSecondFloor )  //
          const [ studentsOnThirdFloor , setStudentsOnThirdFloor ] = useState(  [ ]  )
            console.log( "State of studentsOnThirdFloor: " , studentsOnThirdFloor )  //


  function handleStudentClick( studentSentUp ){

    console.log(  "Student!: " , studentSentUp )  //

      
      if( studentSentUp.floor === 1 ){

        setStudentsOnFirstFloor(  [ ...studentsOnFirstFloor , studentSentUp ]  )

      }
      if( studentSentUp.floor === 2 ){

        setStudentsOnSecondFloor(  [ ...studentsOnSecondFloor , studentSentUp ]  )

      }
      if( studentSentUp.floor === 3 ){

        setStudentsOnThirdFloor(  [ ...studentsOnThirdFloor , studentSentUp ]  )

      }

      let everyoneStillInTheLobby = arrayOfStudents.filter(  ( studentToCheck )=>{

        if( studentToCheck.id != studentSentUp.id  ){

            return studentToCheck

        }
        
      }  )

      setArrayOfStudents(  [ ...everyoneStillInTheLobby ]  )

  }




  const [ searchTerm , updateSearchTerm ] = useState( "" )
    console.log( "State of searchTerm: " , searchTerm )  //


  return (
    <div>
      <Header />

      <SearchBar updateSearchTerm={ updateSearchTerm }  />

        <h1>Lobby</h1>
        <StudentsList 
          studentsToMap={ arrayOfStudents }  searchTerm={ searchTerm }  
          studentElevator={ handleStudentClick }
        />

      <br/><br/><br/><br/>

      <FirstFloor 
      
        studentsOnFirstFloor={ studentsOnFirstFloor }
        studentsOnSecondFloor={ studentsOnSecondFloor }
        studentsOnThirdFloor={ studentsOnThirdFloor }

      />

    </div>
  );
}
export default App;



/*

<App />

----

<Header />
<SearchBar/>

<StudentsList />
  < Students />
  < Students />
  < Students />

< FirstFloor />
  < SecondFloor />
    < ThirdFloor />

*/
