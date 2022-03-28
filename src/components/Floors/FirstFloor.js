import SecondFloor from "./SecondFloor"

import Student from "../Student"




function FirstFloor( { studentsOnFirstFloor , studentsOnSecondFloor , studentsOnThirdFloor } ){

    return(<div>

        <h1>- First Floor -</h1>
        {
            /* Render First Floor Residents Here */
            studentsOnFirstFloor.map(  ( eachStudent )=>{

                return( <Student 
                  
                  key={ eachStudent.id } studentToRender={ eachStudent }
                
                /> )
      
              } )
        }
        <h1>- - - - - - - - - - - - - - - -</h1>

        
        <SecondFloor 
        
            studentsOnSecondFloor={ studentsOnSecondFloor } 
            
            studentsOnThirdFloor={ studentsOnThirdFloor } 
        
        />

        

    </div>)

}
export default FirstFloor