import React, { useEffect, useState } from "react";
import HRnavbar from "./HRnavbar";
import { Link } from "react-router-dom";

const HRhomepage = () => {
    let [req,setReq] = useState(null);

useEffect(()=>{
    fetch("http://localhost:8000/company")
    .then(res => res.json())
    .then((data)=>{
       setReq(data)
    })
},[])


    return ( 
        <div id="home-container">
            <HRnavbar/>
            <h1>Requriments</h1>
            <div className="Details">
                <ul>
                    <li>Company Name</li>   
                    <li>Role</li>
                    <li>Qualification</li>
                    <li>Skills</li>
                    <li>Eligibility</li>
                    <li id="side">Submit</li>
                </ul>
            </div>
            {
                req && <>
                         {
                            req.map((r)=>{
                                return(
                                    <div className="technical">
                                        <ul>
                                            <li> ➡ {r.company}</li>
                                            <li>{r.role}</li>
                                            <li>{r.eligible.join(", ")}</li>
                                            <li>{r.skillsRequired.join(", ")}</li>
                                            <li>{r.percentage}</li>
                                            <Link to ={`/details/${r.id}`}><button id="set">Add</button></Link>
                                        </ul>
                                    </div>
                                )
                            })
                         }
                       </>
                
                
            }

        </div>
     );
}
 
export default HRhomepage;