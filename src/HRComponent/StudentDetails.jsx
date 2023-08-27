import React, { useEffect, useState } from "react";
import HRnavbar from "./HRnavbar";
const StudentDetails = () => {
    let [get,setGet] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:2000/student")
    .then((res) => res.json())
    .then((result)=>{
        console.log(result);
        setGet(result);
    })
  },[])  
    return ( 
        <div id="studentdetails">
            <HRnavbar/>
          <section id="box">
          <div id="stdd">
                <ul>
                    <li>Student Name</li>
                    <li>Company Added</li>
                </ul>
             </div>
          {
             get && <>
                      {
                        get.map((g)=>{
                            return(
                                <div id="add">
                                        <ul>
                                            <li>{g.Student_name}</li>
                                            <li>{g.company_name}</li>
                                        </ul>
                                </div>
                            )
                        })
                      }
                   </>
          }
          </section>
        </div>
     );
}
 
export default StudentDetails;