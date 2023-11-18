import React from 'react'

function Editpot() {
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
          <input type="text" placeholder="First Name" className="form-control" />
          <input type="text" placeholder="Last Name" className="form-control" />
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
          <select name id className="form-control">
            <option value disabled selected>Gender</option>
            <option value="male">Male</option>
            <option value="femal">Female</option>
            <option value="other">Other</option>
          </select>
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