import ThirdFloor from "./ThirdFloor"

import Student from "../Student"




function SecondFloor( { studentsOnSecondFloor , studentsOnThirdFloor } ){

    return(<div>

        <h1>- Second Floor -</h1>
        {
            /* Render Second Floor Residents Here */
            studentsOnSecondFloor.map( ( eachStudent )=>{

                return( <Student 
                  
                  key={ eachStudent.id } studentToRender={ eachStudent }
                
                /> )
      
              } )
        }
        <h1>- - - - - - - - - - - - - - - -</h1>


        < ThirdFloor studentsOnThirdFloor={ studentsOnThirdFloor } />

    </div>)

}
export default SecondFloor