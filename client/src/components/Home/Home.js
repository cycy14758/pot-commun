import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/Actionuser';
 function Home() {
  const user = useSelector(state => state.userReducer.currentUser)
  const naviagte=useNavigate()
  const dispatch=useDispatch()
  const token = localStorage.getItem("token")
   return (
<div  className='home'  >
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{zIndex: 2000}}>
      <div className="container-fluid">
        {/* Navbar brand */}
       
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          
            <li className="nav-item">
              <a className="nav-link" rel="nofollow" target="_blank">le pot commun</a>
            </li>
           
          </ul>
          <div  className='icon'>
          <Link to={"/addpot"}   >  <button type="button" className="btn btn-outline-light">créer un pot </button></Link>

           { !token ? <li className="nav-item active">
            <Link to={"/login"}   > <button type="button" className="btn btn-outline-light">Connexion</button></Link>
            </li>:
             <li className="nav-item active">
               <button type="button" onClick={() => dispatch(logout(),naviagte("/"))} className="btn btn-outline-light">logout</button>
            </li>}

          </div>
          <ul className="navbar-nav d-flex flex-row">


            {/* Icons */}
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" rel="nofollow" target="_blank">
          
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link"rel="nofollow" target="_blank">
               
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link"  rel="nofollow" target="_blank">
          
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" rel="nofollow" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Navbar */}
    {/* Background image */}

    <div id="intro" className="bg-image shadow-2-strong">
      <div className="body">
        <div className="container d-flex align-items-center justify-content-center text-center h-100">
        
        </div>
      </div>
    </div>
    {/* Background image */}
 
  <main className="mt-5">
    <div className="container">
      {/*Section: Content*/}
      <section>
        <div className="row">
          <div className="col-md-6 gx-5 mb-4">
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
              <img src="https://img.freepik.com/free-photo/glass-jar-full-money-front-decreasing-stacked-coins-against-white-background_23-2147919228.jpg?w=740&t=st=1699110396~exp=1699110996~hmac=c8679e352b5ebd77a27f69f4cbfb1e3744704a9201f2725a5a8e2d0d5d5246f" className="img-fluid" />
              <a href="#!">
                <div className="mask" />
              </a>
            </div>
          </div>
          <div className="col-md-6 gx-5 mb-4">
            <h4><strong>Facilis consequatur eligendi</strong></h4>
            <p className="text-muted">
            Collectez rapidement de l'argent pour un anniversaire, un pot de départ, un mariage, un projet solidaire, etc. Simplifiez vos dépenses à plusieurs !
                  "Unissez-vous pour réaliser des rêves, collectez des fonds et faites une différence ensemble."
            </p>
        
          </div>
        </div>
      </section>
      {/*Section: Content*/}
      <hr className="my-5" />
      {/*Section: Content*/}
      <section className="text-center">
        <h4 className="mb-5"><strong>Créer une cagnotte</strong></h4>
        <Carousel>
      <Carousel.Item>
      <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://www.leparisien.fr/resizer/Aawp5vqdACBMIPbsDENIH_SiLjs=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5XUY3OGMSJOPU4WV6NDHKL7BYA.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card">
                <h5 className="card-title">pot de départ /Retraite</h5>
                <p className="card-text">
                 
                </p>
                <Link to={"/addpot"}   > <buttom  className="btn btn-dark">créer</buttom></Link> 
              </div>
            </div>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://img.freepik.com/premium-photo/time-make-wish-group-happy-people-celebrating-birthday-among-friends-smiling_425904-9345.jpg?w=740" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card">
                <h5 className="card-title">Anniversaire</h5>
                <p className="card-text">
                 
                </p>
                <Link to={"/addpot"}   > <buttom  className="btn btn-dark">créer</buttom></Link>  
              </div>
            </div>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://img.freepik.com/premium-photo/close-up-picture-new-born-baby-feet-knitted-plaid-flowers_139345-1060.jpg?w=740" className="img-fluid" />
                <a href="#!">
                  <div className="body" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card">
                <h5 className="card-title">Naissance/baptéme</h5>
                <p className="card-text">
        
                </p>
                <Link to={"/addpot"}   > <buttom  className="btn btn-dark">créer</buttom></Link> 
              </div>
            </div>
       
        <Carousel.Caption>
          <h3></h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://img.freepik.com/free-photo/home-entertainment-with-friends_1098-12602.jpg?w=740&t=st=1699295077~exp=1699295677~hmac=1a4a43aeb611f311fa8556370cb322c1943bddcf667211cd7daf328a5d5281b3" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card">
                <h5 className="card-title">Evénement</h5>
                <p className="card-text">
                 
                </p>
                <Link><buttom  className="btn btn-dark">créer</buttom></Link> 
              </div>
            </div>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://img.freepik.com/premium-photo/medium-shot-girls-hugging_23-2149070064.jpg?w=740" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card">
                <h5 className="card-title">Remerciment</h5>
                <p className="card-text">
                 
                </p>
                <Link to={"/addpot"}   > <buttom  className="btn btn-dark">créer</buttom></Link> 
              </div>
            </div>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </section>
      {/*Section: Content*/}
      <hr className="my-5" />
      {/*Section: Content*/}
      <section className="mb-5">
        <h4 className="mb-5 text-center"><strong>Facilis consequatur eligendi</strong></h4>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
           
          </div>
        </div>
      </section>
      {/*Section: Content*/}
    </div>
  </main>
  {/*Main layout*/}
  {/*Footer*/}
  <footer className="bg-light text-lg-start">
    <div className="py-4 text-center">
      
    </div>
    <hr className="m-0" />
    <div className="text-center py-4 align-items-center">
      <p>Follow MDB on social media</p>
      <a className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
        <i className="fab fa-youtube" />
      </a>
      <a  className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
        <i className="fab fa-facebook-f" />
      </a>
      <a  className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a  className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-dark" >MDBootstrap.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/*Footer*/}
</div>

      
   )
 }
 
 export default Home