import React, { useEffect, useRef, useState } from "react";
import HRnavbar from "./HRnavbar";
import { useNavigate, useParams } from "react-router-dom";
const Addstudent = () => {
   let cmpy = useRef();
   let role = useRef();
   let email = useRef();
   let tell = useRef();
   let stu = useRef();
   let quali = useRef();
   let per = useRef();
   let pass = useRef();
   let skill = useRef();
   let {id} = useParams();
   let went = useNavigate();


   useEffect(()=>{
      fetch(`http://localhost:7000/students/${id}`)
      .then(res => res.json())
      .then((data) =>{
         email.current.value = data.email;
         tell.current.value = data.phone;
         stu.current.value=  data.name ;
         quali.current.value =   data.qualification;
         per.current.value =    data.percentage;
         pass.current.value =     data.year_of_pass;
         skill.current.value =      data.skills.join(", ")
      })
   },[])

   let handale = (e)=>{
      e.preventDefault();
      const  data = {
         company_name  : cmpy.current.value ,
         Role          : role.current.value,
         email_id      : email.current.value,
         phone_number  : tell.current.value,
         Student_name  : stu.current.value,
         Qualification : [...new Set([ ...quali.current.value.split(",")])],
         percentage    :  per.current.value,
         year_of_pass  : pass.current.value,
         Skills        : [...new Set([ ...skill.current.value.split(",")])]
      }
      fetch("http://localhost:2000/student",{
         method:"POST" ,
         headers : {"Content-Type" : "application/json"},
         body:JSON.stringify(data)
      })
      .then(()=>{
         alert('Data Added Successfully');
         setTimeout(()=>{
              went('/studentdetails');
         },1000)
      })
   }
    return ( 
        <div id="addstudent">
         <HRnavbar/>
         <h1>Add Student Deatils to the Company requriment :</h1>
         <form onSubmit={handale}>
            <input type="text" placeholder="Company Name" ref={cmpy}/>
            <input type="text" placeholder="Role" ref={role}/>
            <input type="email" placeholder="Email ID" ref={email}/>
            <input type="tel" placeholder="phone number" maxLength="10" minLength="10"  ref={tell}/>
            <input type="text" placeholder="Student Name" ref={stu} />
            <input type="text" placeholder="Qualification" ref={quali} />
            <input type="number" placeholder="percentage" ref={per}/>
            <input type="number" placeholder="Year of Pass"  ref={pass}/>
            <input type="text" placeholder="Skills" ref={skill}/>
            <button>Submit</button>
         </form>
        </div>
     );
}
 
export default Addstudent;