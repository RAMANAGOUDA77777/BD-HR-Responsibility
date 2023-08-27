import React  from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div id="navbar-container">
          <div className="logo">
            <Link to='/home'><h1>Home</h1></Link>
          </div>
          <div className="text">
             <Link to = '/addReq'><p>Add Requriments</p></Link>
            <Link to ='/profile'><p>Profile</p></Link>
          </div>
        </div>
     );
}
 
export default Navbar;