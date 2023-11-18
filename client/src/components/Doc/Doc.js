import React from 'react'
import './Doc.css'

function Doc() {
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
       
          <div className="container">
          <div className="card">
            <div className="box">
              <div className="content">
                
                <h3>Card One</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam
                  velit? Iure nemo labore inventore?
                </p>
                <a href="#">Ajouter</a>
              </div>
            </div>
          </div>
         
          
        </div>
        </div>
          
  )
}

export default Doc