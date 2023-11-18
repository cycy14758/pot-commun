import React from 'react'
import "./Editprofil.css"
function Editprofil() {
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
                  <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" />
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
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
                <span>Settings</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-support-16" />
                <span>Support</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    {/* Header */}
    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
      {/* Mask */}
      <span className="mask bg-gradient-default opacity-8" />
   
        
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
                        <label className="form-control-label" htmlFor="input-username">Username</label>
                        <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" defaultValue="lucky.jesse" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">Email address</label>
                        <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-first-name">First name</label>
                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" defaultValue="Lucky" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                        <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" defaultValue="Jesse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                </div>
         
                </div>
      
          
  

  )
}

export default Editprofil