import React from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert/Alert'
import { addUser } from '../../Redux/Actions/Actionuser';
function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState();
  
  const navigate = useNavigate();
  const Disptach=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hi");
    if(img==null) 
    {alert(" please add your photo") }
  
  
    const data = new FormData();
    
     data.append("password",password)
     data.append("email", email)
     data.append("name",name)
     data.append("file",img)
 
     Disptach(addUser(data, navigate))
    
  }
 
 
  return (
 
  
    <div>
    {/* Design by foolishdeveloper.com */}
    <title>Glassmorphism login Form Tutorial in html css</title>
   
    {/*Stylesheet*/}
    <style media="screen" dangerouslySetInnerHTML={{__html: "\n          *,\n    *:before,\n    *:after{\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n    body{\n            }\n    .background{\n        width: 430px;\n        height: px;\n        position: absolute;\n        transform: translate(-50%,-50%);\n        left: 50%;\n        top: 50%;\n    }\n    .background         height: 2000px;\n        width: 200px;\n        position: absolute;\n        border-radius: 50%;\n    }\n    .shape:first-child{\n        background: linear-gradient(\n            #1845ad,\n            #23a2f6\n        );\n        left: -80px;\n        top: -80px;\n    }\n    .shape:last-child{\n               to right,\n            #ff512f,\n            #f09819\n        );\n        right: -30px;\n        bottom: -80px;\n    }\n    form{\n        height: 720px;\n        width: 400px;\n        background-color: rgba(255,255,255,0.13);\n        position: absolute;\n        transform: translate(-50%,-50%);\n        top: 50%;\n        left: 50%;\n        border-radius: 10px;\n        backdrop-filter: blur(10px);\n        border: 2px solid rgba(255,255,255,0.1);\n        box-shadow: 0 0 40px rgba(8,7,16,0.6);\n        padding: 50px 35px;\n    }\n    form *{\n        font-family: 'Poppins',sans-serif;\n        color: #ffffff;\n        letter-spacing: 0.5px;\n        outline: none;\n        border: none;\n    }\n    form h3{\n        font-size: 32px;\n        font-weight: 500;\n        line-height: 42px;\n        text-align: center;\n    }\n    \n    label{\n        display: block;\n        margin-top: 30px;\n        font-size: 16px;\n        font-weight: 500;\n    }\n    input{\n        display: block;\n        height: 5000px;\n        width: 100%;\n        background-color: rgba(255,255,255,0.07);\n        border-radius: 3px;\n        padding: 0 10px;\n        margin-top: 8px;\n        font-size: 14px;\n        font-weight: 300;\n    }\n    ::placeholder{\n        color: #e5e5e5;\n    }\n    button{\n        margin-top: 50px;\n        width: 100%;\n        background-color: #ffffff;\n        color: #080710;\n        padding: 15px 0;\n        font-size: 18px;\n        font-weight: 600;\n        border-radius: 5px;\n        cursor: pointer;\n    }\n    .social{\n      margin-top: 30px;\n      display: flex;\n    }\n    .social div{\n      background: red;\n      width: 150px;\n      border-radius: 3px;\n      padding: 5px 10px 10px 5px;\n      background-color: rgba(255,255,255,0.27);\n      color: #eaf0fb;\n      text-align: center;\n    }\n    .social div:hover{\n      background-color: rgba(255,255,255,0.47);\n    }\n    .social .fb{\n      margin-left: 25px;\n    }\n    .social i{\n      margin-right: 4px;\n    }\n    \n        " }} />
    <div className="background">
      <div className="shape" />
      <div className="shape" />
    </div>
    <form   className='form-Login'  >
  
      <label htmlFor="username">Email</label>
      <input type="text"  onChange={(e) => setemail(e.target.value)} placeholder="Email or Phone" id="username" />
      
      <label htmlFor="username">Username</label>
      <input type="text"  onChange={(e) => setname(e.target.value)} placeholder="Email or Phone" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password"     onChange={(e) => setpassword(e.target.value)} placeholder="Password" id="password" />
      
      <label > choisir un fichier </label>

      <input type="file" onChange={(e) => setimg(e.target.files[0])} />
       <button onClick={handleSubmit}    className='log'>Register</button>
   
    
    </form>
  </div>

  )
}

export default Register
