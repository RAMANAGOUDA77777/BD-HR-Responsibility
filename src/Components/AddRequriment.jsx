import React, { useRef } from "react";
import Navbar from "./Navbar";
const AddRequriment = () => {
    let compyname = useRef();
    let role = useRef();
    let skill = useRef();
    let Qualific = useRef();
    let Perc = useRef();

    let formHandale = (e)=>{
    e.preventDefault();
    let Content = {
        company           :    compyname.current.value,
        role              :    role.current.value ,
        eligible          :    Qualific.current.value.split(","),
        skillsRequired    :    skill.current.value.split(",") ,
        percentage        :   parseInt( Perc.current.value)
    }

    fetch("http://localhost:8000/company" , {
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify(Content)
    })
    .then(()=>{
        alert('Requirement Added Successfully');
    })
    }
    return ( 
        <div id="addrequriment">
            <Navbar/>
            <h1>Add Requriment :</h1>
            <form onSubmit={formHandale}>
                <label>Company Name</label>
                <input type="text" placeholder="Company Name" ref={compyname} />
                <label>Role</label>
                <input type="text" placeholder="Role" ref={role}/>
                <label>Qualification</label>
                <input type="text"  placeholder="Qualification" ref={Qualific}/>   
                <label >Skills</label>
                <input type="text" placeholder="Skills"  ref={skill}/>
                <label>Percentage</label>
                <input type="number" placeholder="Percentage"  ref={Perc}/>
                <input type="submit"  value="Submit"/>
            </form>
        </div>
     );
}
 
export default AddRequriment;