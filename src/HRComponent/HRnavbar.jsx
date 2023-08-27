import React from "react";
import { Link } from "react-router-dom";
const HRnavbar = () => {
    return ( 
        <div id="navbar-container">
          <div className="logo">
           <Link to ='/hrhomepage'><h1>Home</h1></Link>
          </div>
          <div className="text">
             <Link to ='/studentdetails'><p>Student Details</p></Link>
             <Link to ='/hrprofile'><p>Profile</p></Link>
          </div>
        </div>
     );
}
 
export default HRnavbar;