import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const RequrimentsDetails = () => {
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
            <Navbar/>
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
                                            <div  id="adjust">
                                                <Link to ={`/edit/${r.id}`}><button>Edit</button></Link>
                                                <button onClick={(e)=>{
                                                    e.preventDefault();
                                                    fetch(`http://localhost:8000/company/${r.id}`,{
                                                     method:"DELETE"
                                                    })
                                                    .then(()=>{
                                                     alert("Successfully deleted")
                                                      window.location.reload();
                                                    })
                                                }}>Delete</button>
                                            </div>
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
 
export default RequrimentsDetails;