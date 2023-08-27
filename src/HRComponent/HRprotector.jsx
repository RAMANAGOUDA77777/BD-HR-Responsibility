import React from "react";
import { Navigate } from "react-router-dom";
const HRprotector = ({Child}) => 
{

    let verify = ()=>
    {
        let result = localStorage.getItem('currentuser') 
          if(!result)
          {
            return false
          }
          else
          {
            return true
          }
    }
                          
return (
    <div id="protector-container">
        {
            verify() ? <Child/> : <Navigate to = '/hrlogin'/>
        }
    </div>
    );
                
}

export default HRprotector;

