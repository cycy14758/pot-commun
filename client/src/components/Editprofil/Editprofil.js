import React from 'react'
import "./Editprofil.css"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import {  editUser } from '../../Redux/Actions/Actionuser'
import { Link } from 'react-router-dom'
function Editprofil() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState();
    const [newInfo, setnewInfo] = useState("")
  const user = useSelector(state => state.userReducer.currentUser)
  const navigate = useNavigate();


  const dispatch = useDispatch()

  useEffect(() => {
    setnewInfo(user)
  }, [user])

const handlesubmit=(e)=>{

  const data = new FormData();
    
  data.append("password",password)
  data.append("email", email)
  data.append("name",name)
  data.append("file",img)
  dispatch(editUser(user._id,data, navigate))

     navigate('/Profil')
  }

  return (
   <div>
  <link  rel="stylesheet" />
  <div className="main-content">
    {/* Top navbar */}
    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div className="container-fluid">
        {/* Brand */}
        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" target="_blank">User profile</a>
        {/* Form */}
     
        {/* User */}
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src={user.img}/>
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span onChange={(e) => setimg(e.target.files[0])} className="mb-0 text-sm  font-weight-bold">{user.name}</span>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </a>
              <a href="" className="dropdown-item">
                <i className="ni ni-settings-gear-65" />
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-calendar-grid-58" />
               
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-support-16" />
              </a>
              <div className="dropdown-divider" />
           
            </div>
          </li>
        </ul>
      </div>
    </nav>
    {/* Header */}
    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
      <span className="b" />
   
        
                <div className="col-4 text-right">
               
                </div>
              </div>
            </div>
            <div className="card-body">
             
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-username">{user.name}</label>
                        <input type="text" onChange={(e) => setname(e.target.value)} id="input-username" className="form-control form-control-alternative" placeholder="Username" defaultValue="lucky.jesse" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">{user.email}</label>
                        <input type="email"  onChange={(e) => setemail(e.target.value)}id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                      <input type="file" onChange={(e) => setimg(e.target.files[0])}   className="custom-input" id="image" name="image" accept="image/*" required />
                        
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                      <div className="custom-label">Pot Image:</div>
        

                        
                        
                        <button type="button" onClick={handlesubmit} className="bo">save change</button>
                        <Link to={"/Profil"} > <button type="button" className="bou">return</button></Link> </div>
                    </div>
                  </div>
                </div>
                
                </div>
         
                </div>
      
          
  

  )
}

export default Editprofil