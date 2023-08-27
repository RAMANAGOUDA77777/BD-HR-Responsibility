import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
const HRsignup = () => {
   let name = useRef();
   let email = useRef();
   let phoneNumber = useRef();
   let password = useRef();
   let navigate = useNavigate();

   let getData = (e)=>{
            e.preventDefault();
            let userData = {
               username      : name.current.value ,
               phone_number  : phoneNumber.current.value  ,
               email         : email.current.value    ,
               password      : password.current.value
            }
            fetch("http://localhost:5000/hruser",{
               method:"POST",
               headers:{"Content-Type" : "application/json"},
               body : JSON.stringify(userData)   
            })
            .then(()=>{
               alert('your Account Created Successfully');
                setTimeout(()=>{
                  navigate('/hrlogin')
                },1000)
            })
   }
    return ( 
        <div id="signup-container">
           <form onSubmit={getData}>
            <h1>Sign Up</h1>
             <input type="text" placeholder="Name" ref={name}/>
             <input type="email" placeholder="Email" ref={email}/>
             <input type="tel"  maxLength='10' minLength='10' placeholder="Phone number" ref={phoneNumber}/>
             <input type="password" placeholder="Password" ref={password}/>
             <button>Create Account</button>
             <span>Already have an account? <Link to ="/hrlogin"><strong>Sign in</strong></Link></span>
           </form>
        </div>
     );
}
 
export default HRsignup;