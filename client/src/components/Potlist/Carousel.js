import Carousel from 'react-bootstrap/Carousel';
import './potlist.css'
import Card from '../Card/card';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://www.leparisien.fr/resizer/Aawp5vqdACBMIPbsDENIH_SiLjs=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5XUY3OGMSJOPU4WV6NDHKL7BYA.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">pot de départ /Retraite</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">créer</a>
              </div>
            </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <div className="card-body">
                <h5 className="card-title">Anniversaire</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">créer</a>
              </div>
            </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <div className="card-body">
                <h5 className="card-title">Anniversaire</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">créer</a>
              </div>
            </div>
       
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;