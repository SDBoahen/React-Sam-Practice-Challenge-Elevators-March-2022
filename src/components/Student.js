import React from "react";

function Student() {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={"Student Image Link"}
          alt={"Student Name"}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{"Student Name"}</div>
          <p className="card__text">{"Conditionally Render bio OR current Phase in Software Engieering Program"}</p>
          <div className="card__detail">
            <p>
              {
                "Conditionally Render if the Person is Checked-In"
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
