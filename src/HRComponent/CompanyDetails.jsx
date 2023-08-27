import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HRnavbar from "./HRnavbar";
import { Link } from "react-router-dom";

const CompanyDetails = () => {
    let {id} = useParams();
    let [req,setReq] = useState(null);
    let [student,setStudent] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:8000/company/${id}`)
        .then(res => res.json())
        .then((data)=>{
           setReq(data)
        })
    },[])
    //---------------------student details filter-----------------------------------------------------------------------

    useEffect(()=>{
        fetch("http://localhost:7000/students")
        .then(res=>res.json())
        .then((data)=>{
            setStudent(data.filter((f)=>{return f.percentage >= 90 }));  
        })
    },[])

    return ( 
        <div id="companydetails">
            <HRnavbar></HRnavbar>
             {
                req && <>
                         {
                            <div id="HrcompanyDetails">
                                  <h1>Company details {id}</h1>
                                <ul>
                                        <li>Company Name : {req.company}</li>
                                        <li>Role : {req.role}</li>
                                        <li>Qualification : {req.eligible.join(", ")}</li>
                                        <li>Skills : {req.skillsRequired.join(", ")}</li>
                                        <li>Percentage : {req.percentage}</li>
                                    </ul>
                            </div>
                         }
                       </>
            }
             <section id="Elstu">
             <h2>Eligibal Candidates for Requriment :</h2>
            {
                student  &&  <>
                                {
                                   student.map((s)=>{return(
                                       <div className="technical-container">
                                           <ul>
                                                <li>{s.name}</li>
                                                <li>{s.email}</li>
                                                <li>{s.phone}</li>
                                                <li>{s.qualification}</li>
                                                <li>{s.percentage}</li>
                                                <li>{s.skills.join(", ")}</li>
                                                <li>{s.year_of_pass}</li>
                                                <Link to = {`/addstudent/${s.id}`}><li><button id="set">Add</button></li></Link>
                                            </ul>
                                        </div>
                                   )})
                                }
                            </>
            }
             </section>
        </div>
     );
}
 
export default CompanyDetails;