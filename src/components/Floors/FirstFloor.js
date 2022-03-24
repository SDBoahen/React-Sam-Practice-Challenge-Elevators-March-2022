import SecondFloor from "./SecondFloor"




function FirstFloor(){

    return(<div>

        <h1>- First Floor -</h1>
        {
            /* Render First Floor Residents Here */
        }
        <h1>- - - - - - - - - - - - - - - -</h1>

        
        <SecondFloor />

        

    </div>)

}
export default FirstFloor