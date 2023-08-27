import React, { useEffect, useRef} from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
const Editrequriment = () => {
    let compyname = useRef();
    let role = useRef();
    let skill = useRef();
    let Qualific = useRef();
    let Perc = useRef();
    let {id} = useParams();
    let back = useNavigate();

   useEffect(()=>{
    fetch(`http://localhost:8000/company/${id}`)
    .then(res => res.json())
    .then((data)=>{
        compyname.current.value = data.company
        role.current.value  =  data.role
        skill.current.value  =  data.skillsRequired
        Qualific.current.value  =  data.eligible
        Perc.current.value = data.percentage
    })
   },[])

   let formHandale = (e)=>{
      e.preventDefault();
      let data = {
        company            :  compyname.current.value,
        role               :  role.current.value,
        skillsRequired     :   [...new Set([ ...skill.current.value.split(",")])],
        eligible           :   [...new Set([ ...Qualific.current.value.split(",")])],
        percentage         :  Perc.current.value    
      }
      fetch(`http://localhost:8000/company/${id}`,{
        method:"PUT",
        headers:{"Content-Type" : "application/json"},
        body    : JSON.stringify({...data})
      })
      .then(()=>{
        alert("Successfully Edit the requriment")
         back('/home');
      })
   }
    return ( 
        <div id="addrequriment">
            <Navbar/>
            <h1>Edit Requriment :</h1>
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
 
export default Editrequriment;