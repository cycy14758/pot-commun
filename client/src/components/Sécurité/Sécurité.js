import React from 'react'
import'./Sécurité.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Sécurité() {
  

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password === confirmPassword) {
     
      console.log('Passwords match!');
    } else {
      alert('Passwords do not match. Please check again.');
    }
  };

  return (
    <div>
    <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000', height: 200}}>
          <div className="ms-4 mt-5 d-flex flex-column" style={{width: 150}}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: 150, zIndex: 1}} />
            <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
              Edit profile
            </button>
          </div>
          <div className="ms-3" style={{marginTop: 130}}>
            <h5>Andy Horwitz</h5>
            <p>New York</p>
          </div>
        </div>
        <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
          <div className="d-flex justify-content-end text-center py-1">
          <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
      Mes informations
            </button>
            <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
              Sécurité
            </button>
            <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
              Documents d'identités
            </button>
          </div>
        </div>
     
<div className="co">
  <h2>Sécurité</h2>
  <form>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password"      onChange={(e) => setPassword(e.target.value)}required />
    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword"   onChange={(e) => setConfirmPassword(e.target.value)} required />
    <div className="strength-indicator">
      <div className="strength-bar">
        <div className="strength-bar-inner" />
      </div>

    </div>
    <Link to={"/Profil"}  > <button type="submit" onClick={handleSubmit}>Confirm</button></Link>
  </form>
</div>
</div>
        
  )
}

export default Sécurité