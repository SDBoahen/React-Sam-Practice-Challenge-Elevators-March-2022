import React, { useState } from "react";

function Student( { studentToRender , studentElevator } ) { 

  const [ bioOrPhase , toggleBioOrPhase ] = useState( true )

  function clickHandler(){
    
    toggleBioOrPhase( !bioOrPhase )
    
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img onClick={ clickHandler }
          src={ studentToRender.pictureUrl }
          alt={ studentToRender.name }
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{ studentToRender.name }</div>
          <p className="card__text">{ bioOrPhase ? studentToRender.bio : studentToRender.currentPhase }</p>
          <div className="card__detail">
            <p>
              {
                studentToRender.checkedIn ? "Checked-In :)" : "Not Checked-In"
              }
            </p>
          </div>

              <button onClick={ ( synthEvent )=> studentElevator( studentToRender ) } >Head To Room :)</button>

        </div>
      </div>
    </li>
  );
}
export default Student;
