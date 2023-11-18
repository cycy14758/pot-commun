import React from 'react'
import img from'./IMG20220304220842.jpg'
import './Profil.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function Profil() {


 const user=useSelector(state=>state.userReducer.currentuser)
 console.log(user);
  return (
    <section className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000', height: 200}}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: 150}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: 150, zIndex: 1}} />
              <Link to={"/editprofile"}   > <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
                Edit profile
              </button> </Link>
            </div>
            <div className="ms-3" style={{marginTop: 130}}>
              <h5>Andy Horwitz</h5>
              <p>New York</p>
            </div>
          </div>
          <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
            <div className="d-flex justify-content-end text-center py-1">
            <Link to={"/info"}   ><button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
        Mes informations
              </button></Link>
              <Link to={"/sec"}   >  <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
                Sécurité
              </button></Link>
              <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
                Documents d'identités
              </button>
            </div>
          </div>
          <div className="card-body p-4 text-black">
           
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent pots</p>
              
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="image 1" className="w-100 rounded-3" />
              </div>
              <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 1" className="w-100 rounded-3" />
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 1" className="w-100 rounded-3" />
              </div>
              <div className="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 1" className="w-100 rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  )
}

export default Profil