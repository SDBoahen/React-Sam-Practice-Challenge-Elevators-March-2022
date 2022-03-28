import React, { useState } from "react";
  import Student from "./Student";

function StudentsList( { studentsToMap , searchTerm } ) {

  
  let filteredSearchResult = studentsToMap.filter( 
      
      ( eachStudent )=>{

      // filter based upon a condition
      //// name OR bio 

        // console.log( "eachStudent.name: " , eachStudent.name )  //

        if(  
          
          eachStudent.name.toLowerCase().includes( searchTerm.toLowerCase() ) 
          
          ||  // OR //

          eachStudent.bio.toLowerCase().includes( searchTerm.toLowerCase() ) 

        
        ){

          return( eachStudent )

        }

      } 

    )
    console.log( "filteredSearchResult: " , filteredSearchResult )  //

      // studentsToMap = filteredSearchResult


  return (
    <ul className="cards">

      {
        filteredSearchResult.map(  

          ( eachStudentYoureMapping )=>{ 
            
            return( 
              < Student 
    
                  key={eachStudentYoureMapping.id} // For React ⚛️  id={}
                studentToRender={ eachStudentYoureMapping } // For Us
    
              /> 
            )
            // console.log( eachStudentYoureMapping )  //
          
          } 
    
        )
      }


    </ul>
  );
}

export default StudentsList;
















// function StudentsList( { studentsToMap } ) {

//   const [ searchTerm , updateSearchTerm ] = useState( "" )
//     console.log( "State of searchTerm: " , searchTerm )  //

    
//     let allStudents = studentsToMap
    

//   let filteredSearchResult = allStudents.filter( 
      
//       ( eachStudent )=>{

//       // filter based upon a condition
//       //// name OR bio 

//         // console.log( "eachStudent.name: " , eachStudent.name )  //

//         if(  eachStudent.name.toLowerCase().includes( searchTerm.toLowerCase() )  ){

//           return( eachStudent )

//         }

//       } 

//     )
//     console.log( "filteredSearchResult: " , filteredSearchResult )  //
//     //// filteredSearchResult:[ {} ]  [ eachStudent: {} {} ]

    
//       studentsToMap = filteredSearchResult

   
  
//   function handleChange( synthEvent ){

//     updateSearchTerm( synthEvent.target.value )
//     // console.log( "synthEvent.target.value: " , synthEvent.target.value )  //

//   }


//   return (
//     <ul className="cards">

//       <input onChange={  handleChange  } />


//       {
//         studentsToMap.map(  

//           ( eachStudentYoureMapping )=>{ 
            
//             return( 
//               < Student 
    
//                   key={eachStudentYoureMapping.id} // For React ⚛️  id={}
//                 studentToRender={ eachStudentYoureMapping } // For Us
    
//               /> 
//             )
//             // console.log( eachStudentYoureMapping )  //
          
//           } 
    
//         )
//       }


//     </ul>
//   );
// }

// export default StudentsList;

















/*

  // render function
   const renderStudents =(  )=>{

      return(

        studentsToMap.map(  

          ( eachStudentYoureMapping )=>{ 
            
            return( 
              < Student 
    
                  key={eachStudentYoureMapping.id} // For React ⚛️  id={}
                studentToRender={ eachStudentYoureMapping } // For Us
    
              /> 
            )
            // console.log( eachStudentYoureMapping )  //
          
          } 
    
        )

      )

    }


    // render variable
    const studentsToRender = studentsToMap.map(  

      ( eachStudentYoureMapping )=>{ 
        
        return( 
          < Student 

              key={eachStudentYoureMapping.id} // For React ⚛️  id={}
            studentToRender={ eachStudentYoureMapping } // For Us

          /> 
        )
        // console.log( eachStudentYoureMapping )  //
      
      } 

    )
    console.log( "studentsToRender :" , studentsToRender )

*/



/* <h2> Rendering Directly in JSX Return Using a Function</h2>
      { renderStudents() }
      
      <h2> Rendering Directly in JSX Return Using a Variable</h2>
      { studentsToRender }


      <h2> Rendering Directly in JSX Return</h2>
      {

        //  studentsToMap : [ {}{}{} ]
        studentsToMap.map(  

          ( eachStudentYoureMapping )=>{ 
            
            return( 
              < Student 

                  key={eachStudentYoureMapping.id} // For React ⚛️  id={}
                studentToRender={ eachStudentYoureMapping } // For Us

              /> 
            )
            // console.log( eachStudentYoureMapping )  //
          
          } 

        )
        //  studentsToMap : [ <Student><><> ]


  } */