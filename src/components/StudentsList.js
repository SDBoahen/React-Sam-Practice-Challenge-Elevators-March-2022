import React from "react";
import Student from "./Student";


function StudentsList( { studentsToMap , searchTerm , studentElevator } ) { 


  let filterResultOfMatchingStudents = studentsToMap.filter(  ( studentToCheck )=>{

    if(  
      
      studentToCheck.name.toLowerCase( ).includes( searchTerm.toLowerCase() )
      
      ||

      studentToCheck.bio.toLowerCase( ).includes( searchTerm.toLowerCase() )  
    
    ){

      return studentToCheck

    }

  }  )
  console.log( "filterResultOfMatchingStudents :" , filterResultOfMatchingStudents )


  return (
    <ul className="cards">
      {

        filterResultOfMatchingStudents.map( ( eachStudent )=>{

          return( <Student 
            
            key={ eachStudent.id } studentToRender={ eachStudent }
            studentElevator={ studentElevator } 
          
          /> )

        } )

      }
    </ul>
  );
}

export default StudentsList;
