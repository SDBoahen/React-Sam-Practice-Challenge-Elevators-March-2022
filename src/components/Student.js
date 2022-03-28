import React, { useState } from "react";

function Student( { studentToRender } ) {
  //// js


    // console.log( "studentToRender: " , studentToRender )  //
    //// studentToRender : { name: "Sam" }

    let checkedInStatus = studentToRender.checkedIn
      // console.log( "checkedInStatus: " , checkedInStatus )  //


    const [ bioOrPhase , toggleBioOrPhase ] = useState( true )
      // console.log( "State of This Student's bioOrPhase: " , bioOrPhase )  //

    const handleClick =( )=>{

      toggleBioOrPhase( !bioOrPhase )

      // console.log( "bioOrPhase: " , bioOrPhase )  //
      
    }


  //// js
  return (
    <li className="cards__item">
      <div className="card">

        <img onClick={ handleClick }
          src={studentToRender.pictureUrl}
          alt={studentToRender.name}
          className="card__image"
        />

        <div className="card__content">
          <div className="card__title">{studentToRender.name}</div>
          <p className="card__text">{
            
            bioOrPhase ?

            studentToRender.bio // true
            :
            studentToRender.currentPhase // false
          
          
          }</p>
          <div className="card__detail">
            <p>
              {
                // someTrueOrFalseVariable ? true : false
                  checkedInStatus ? "Checked-in! :)" : "Not Checked-In"
              }
            </p>
          </div>

              <button>Head To Room :)</button>

        </div>
      </div>
    </li>
  );
}

export default Student;









// function Student( props ) {
//   //// js

//     console.log( "props: " , props )  //
//     //// props : {  studentToRender : { name: "Sam" }  }

//     let checkedInStatus = props.studentToRender.checkedIn
//       console.log( "checkedInStatus: " , checkedInStatus )  //

//   //// js
//   return (
//     <li className="cards__item">
//       <div className="card">
//         <img
//           src={props.studentToRender.pictureUrl}
//           alt={props.studentToRender.name}
//           className="card__image"
//         />
//         <div className="card__content">
//           <div className="card__title">{props.studentToRender.name}</div>
//           <p className="card__text">{props.studentToRender.bio}</p>
//           <div className="card__detail">
//             <p>
//               {
//                 // someTrueOrFalseVariable ? true : false
//                   checkedInStatus ? "Checked-in! :)" : "Not Checked-In"
//               }
//             </p>
//           </div>

//               <button>Head To Room :)</button>

//         </div>
//       </div>
//     </li>
//   );
// }

// export default Student;


/*






    let checkedInText = ""


    function renderCheckedInStatus(){

      if( checkedInStatus === true  ){ 
        return "Checked-in! :)" 
      }
      else{ return "Not Checked-in" }

    }

    // if( checkedInStatus === true  ){ 
    //   checkedInText = "Checked-in! :)" 
    // }
    // else{ checkedInText = "Not Checked-in"}


    // renderCheckedInStatus()
    // checkedInText


*/