import React from 'react'
import'./Editpot.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { editpot } from '../../Redux/Actions/Actionpot';

function Editpot() {
  const [title, settitle] = useState("");
  const [desc, setdescription] = useState("");
  const [totale, settotale] = useState("");
  const [img, setimg] = useState();

  

  const navigate = useNavigate();
  const dispatch=useDispatch()
  
  const handlesubmit =(e)=>{
    e.preventDefault()
   
    const data = new FormData();

    data.append("title",title)
    data.append("description",desc)
    data.append("total",totale)
    data.append("file",img)

  dispatch(editpot(data,navigate))
   
  }
  return (
    <div>
  <meta charSet="utf-8" />
  <title>RegistrationForm_v1 by Colorlib</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="fonts/material-design-iconic-font/css/material-design-iconic-font.min.css" />
  <link rel="stylesheet" href="css/style.css" />
  <meta name="robots" content="noindex, follow" />
  <div className="wrapper" style={{backgroundImage: 'url("images/bg-registration-form-1.jpg")'}}>
    <div className="inner">
      <div className="image-holder">
        <img src="images/registration-form-1.jpg" alt />
      </div>
      <form action>
        <h3>Registration Form</h3>
        <div className="form-group">
          <label>Pot name</label>

          <input type="text" placeholder="pot Name" className="form-control" />
          <label>description</label>
          <input type="text" placeholder="description" className="form-control" />
        </div>
        <div className="form-wrapper">
          <input type="text" placeholder="Username" className="form-control" />
          <i className="zmdi zmdi-account" />
        </div>
        <div className="form-wrapper">
          <input type="text" placeholder="Email Address" className="form-control" />
          <i className="zmdi zmdi-email" />
        </div>
        <div className="form-wrapper">
      
          <i className="zmdi zmdi-caret-down" style={{fontSize: 17}} />
        </div>
        <div className="form-wrapper">
          <input type="password" placeholder="Password" className="form-control" />
          <i className="zmdi zmdi-lock" />
        </div>
        <div className="form-wrapper">
          <input type="password" placeholder="Confirm Password" className="form-control" />
          <i className="zmdi zmdi-lock" />
        </div>
        <button>Register
          <i className="zmdi zmdi-arrow-right" />
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Editpot