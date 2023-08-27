import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const HRsignin = () => {
    let[username, setUsername] = useState("");
    let[password, setPassword] = useState("");
    let goto = useNavigate();

    let checkdata = (e)=>{
        e.preventDefault();
        let adduser = null;
       
        fetch("http://localhost:5000/hruser")
        .then(res=> res.json())
        .then((result) =>{
            for (let i = 0; i < result.length; i++)
             {
                if(result[i].username == username)
                {   
                    adduser = result[i];
                    console.log(result[i]);
                }
                
            }
            if(!adduser)
            {
                alert("user is not found in database")
            }
            else if(adduser.password != password)
            {
                alert("incorrect your password!! please try again")    
            }
            else
            {
                alert("Successfully login into your Account");
                setTimeout(()=>{
                   localStorage.setItem("currentuser", JSON.stringify(adduser))
                    goto('/hrhomepage')
                },1000)
            }
        })
    }
    return ( 
        <div id="signin-container">
            <form onSubmit={checkdata}>
                <h1>Login</h1>
                <input type="text" placeholder="username    " value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default HRsignin;