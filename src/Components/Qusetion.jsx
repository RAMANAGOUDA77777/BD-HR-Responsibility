import React from "react";
import { Link } from "react-router-dom";
const Question = () => {
    return ( 
        <div id="question">
             <h1>Who are you ?</h1>
             <section>
                <Link to = '/bs'> <button>Business Developement</button></Link>
                 <Link to = '/hr'> <button>HR</button></Link>
                <Link to = '/studentsignup'> <button>Student</button></Link>
             </section>
        </div>
     );
}
 
export default Question;