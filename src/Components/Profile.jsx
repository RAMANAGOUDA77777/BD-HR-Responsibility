import React, { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";


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

const Profile = () => {
let [ use, setUse] =  useState(null);

let out = useNavigate();
  useEffect(()=>{
    let res = JSON.parse(localStorage.getItem("currentuser"))
    setUse(res);
  },[])

// ------------update profile----------------------------------------------------------------------------------

  let updateProfile = (e)=>{
    e.preventDefault();
    let set = {
      username : one.current.value,
      email    : two.current.value ,
      phone_number : three.current.value,
      password   : use.password 
    }
    fetch(`http://localhost:4000/user/${use.id}`,{
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
        <>
            {
              use &&  <div id="profile-container">
                          <img src="  https://floridadep.gov/sites/default/files/media-folders/media-root/Business%20Development%20Words.jpg" alt="" />
                          <img src="http://www.usnews.com/cmsmedia/7c/65/5feb1816423dbf2602999815a2db/161227-businessman-stock.jpg" alt="" />
                          <article>
                              <p>Name : {use.username}</p>
                              <p>Email ID : {use.email}</p>
                              <p>Phone Number : {use.phone_number}</p>
                              <div className="btn-container">
                                  <button onClick={comeOut}>LogOut</button>
                                  <button  onClick={openModal}>Update Profile</button>
                              </div>
                          </article>
                      </div>
            }

            <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  id="modal"
                >
                   <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update Profile</h2>
                  <form className="update-profile" onSubmit={updateProfile}>
                    <input type="text"  placeholder="Name" ref={one}/>
                    <input type="email" placeholder="Email ID"  ref={two}/>
                    <input type="tel"   placeholder="Phone number " maxLength="10" minLength="10" ref={three}/>
                    <button>Submit</button>
                  </form>
            </Modal>

        </>
      );
}
 
export default Profile;