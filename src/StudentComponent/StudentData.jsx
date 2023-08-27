import React, { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
const StudentData = () => {
let [ use, setUse] =  useState(null);
let out = useNavigate();

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  useEffect(()=>{
    let res = JSON.parse(localStorage.getItem("currentuser"))
    setUse(res);
    console.log(use);
  },[])

// ------------update profile----------------------------------------------------------------------------------
// 
  let updateProfile = (e)=>{
    e.preventDefault();
    let set = {
      username : one.current.value,
      email    : two.current.value ,
      phone_number : three.current.value,
      password   : use.password 
    }
    fetch(`http://localhost:5000/hruser/${use.id}`,{
      method :"put",
      headers:{"Content-Type" : "application/json"},
      body   :JSON.stringify(set)
    })
    .then(()=>{
      localStorage.setItem("currentuser" , JSON.stringify(set))
      alert("successfully updated your profile")
        setTimeout(()=>{
            closeModal()
            window.location.reload();
        },1000)

    })
  }

   // ------------logout------------------------------------------------------------ 

   let comeOut =(e)=>{
    e.preventDefault();
    localStorage.removeItem("currentuser"); //remove token after logging out
     out("/");
     alert("logout successfully!!")
}

//----------------------------------------- 1st-modal-----------------------------------------

let subtitle;
const [modalIsOpen, setIsOpen] = React.useState(false);
let one = useRef();
let two = useRef();
let three = useRef();

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
  one.current.value = use.username
  two .current.value = use.email
  three.current.value = use.phone_number
}

function closeModal() {
  setIsOpen(false);
}


    return ( 
        <div id="studentdata">
            <h1>Student Account Details</h1>
          {
            use &&   <section id="close">
                            <div id="im--11">
                                <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/qmraJpx/videoblocks-portrait-of-smiling-male-college-student-in-busy-communal-campus-building_s-zrzm3vi_thumbnail-1080_01.png" alt="" />
                            </div>
                            <div id="last--1">
                                <p>Name : {use.username} </p>
                                <p>Email ID : {use.email}</p>
                                <p>Phone number : {use.phone_number} </p>
                                <button  onClick={comeOut}>Logout</button>
                                <button onClick={openModal}>Edit Information</button>
                            </div>
                    </section>
          }
           <article id="stu--container">
              <h1>Company Added for Requriments :</h1>
              <ul>
                <li>TCS</li>
                <li>LNT</li>
                <li>WIPRO</li>
              </ul>
           </article>
          
          
           <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  id="modal"
                >
                   <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update HRprofile</h2>
                  <form className="update-profile" onSubmit={updateProfile}>
                    <input type="text"  placeholder="Name" ref={one}/>
                    <input type="email" placeholder="Email ID"  ref={two}/>
                    <input type="tel"   placeholder="Phone number " maxLength="10" minLength="10" ref={three}/>
                    <button>Submit</button>
                  </form>
            </Modal>

        </div>
     );
}
 
export default StudentData;