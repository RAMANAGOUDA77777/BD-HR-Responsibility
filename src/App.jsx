import React from "react";
import RequrimentsDetails from "./Components/RequrimentsDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRequriment from "./Components/AddRequriment";
import SignUp from "./Components/SingnUp";
import Signin from "./Components/Signin";
import Protector from "./Components/Protector";
import Profile from "./Components/Profile";
import HRnavbar from "./HRComponent/HRnavbar";
import HRhomepage from "./HRComponent/HRhomepage";
import HRsignup from "./HRComponent/HRsignup";
import HRsignin from "./HRComponent/HRsignin";
import CompanyDetails from "./HRComponent/CompanyDetails";
import HRprofile from "./HRComponent/HRprofile";
import StudentDetails from "./HRComponent/StudentDetails";
import HRprotector from "./HRComponent/HRprotector";
import Editrequriment from "./Components/Editrequriment";
import Question from "./Components/Qusetion";
import Addstudent from "./HRComponent/Addstudent";
import StudentData from "./StudentComponent/StudentData";
import Studentlogin from "./StudentComponent/Studentlogin";
import Studentsignup from "./StudentComponent/Studentsignup";

const App = () => {
    return ( 
       <BrowserRouter>
         <div id="abb-container">
          <Routes>
                 <Route path="/" element = {<Question/>}/>
                 <Route path="/bs" element = {<SignUp/>}/>
                 <Route path="/login" element ={<Signin/>}/>
                 <Route path="/home" element = {<Protector Child={RequrimentsDetails}/>}/>
                 <Route path="/addReq" element = {<Protector Child={AddRequriment}/>}/>
                 <Route path="/profile" element={<Profile/>} />
                 <Route path="/hrhomepage" element = {<HRprotector Child={HRhomepage}/>}/>
                 <Route path="/hr" element = {<HRsignup/>}/>
                 <Route path="/hrlogin" element ={<HRsignin/>}/>
                 <Route path="/details/:id" element={<HRprotector Child={CompanyDetails}/>}/>
                 <Route path="/hrprofile" element = {<HRprotector Child={HRprofile}/>}/>
                 <Route path="/studentdetails" element = {<HRprotector Child={StudentDetails}/>}/>
                 <Route path="/edit/:id" element = {<Editrequriment/>}/>
                 <Route path="/addstudent/:id" element = {<Addstudent/>}/>
                 <Route path="/stdd" element = {<StudentData/>}/>
                 <Route path="/studentlogin" element = {<Studentlogin/>}/>
                 <Route path="/studentsignup" element = {<Studentsignup/>}/>
          </Routes>
          </div>
       </BrowserRouter>
     );
}
 
export default App;