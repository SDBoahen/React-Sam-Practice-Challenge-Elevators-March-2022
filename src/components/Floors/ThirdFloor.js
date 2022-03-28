import Student from "../Student"



function ThirdFloor( { studentsOnThirdFloor } ){

    return(<div>

        <h1>- Third Floor -</h1>
        {
            /* Render Third Floor Residents Here */
            studentsOnThirdFloor.map( ( eachStudent )=>{

                return( <Student 
                  
                  key={ eachStudent.id } studentToRender={ eachStudent }
                
                /> )
      
              } )
            
        }
        <h1>- - - - - - - - - - - - - - - -</h1>


    </div>)

}
export default ThirdFloor