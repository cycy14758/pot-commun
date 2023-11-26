import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import './Details.css'
import { useState } from "react";
import { useEffect } from "react";
import { editpot } from "../../Redux/Actions/Actionpot";

function Details ({el}) {
    const dispatch=useDispatch()
    const Pots = useSelector(state => state.potReducer.pots);
    const obj = useParams();
    const newdata=Pots.find(el=>el.id==obj.x)
  
 console.log(newdata);

const [update, setupdate] = useState()
 
 const user = useSelector(state => state.userReducer.currentuser)

 useEffect(() => {
  
    setupdate(newdata)


 }, [])
 


 console.log(user._id);
 const handlesubmit=(e)=>{
  
    
   
 
  dispatch(editpot(update._id,update, Navigate))
  }
return (
   
 
<div>
  <div className="container py-3">
    <div className="title h1 text-center">Horizontal cards - Bootstrap 4</div>
    {/* Card Start */}
    <div className="card">
      <div className="row ">
        <div className="col-md-7 px-3">
          <div className="card-block px-6">
            <h4 className="card-title">{newdata&&newdata.title}</h4>

        
            <br />

            <label for="amount">Enter Amount:</label>
<div>
  <input type="number"  onChange={(e)=>setupdate({...update,totale:e.target.value})}   id="amount" placeholder="Enter amount" />
  <Link  to={"/pay"}   > <button onClick={handlesubmit}>Add to Total</button></Link>
</div>

          </div>
        </div>
        {/* Carousel start */}
        <div className="col-md-5">
          <div id="CarouselTest" className="carousel slide" data-ride="carousel">
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block"   src={newdata&&newdata.img} />
              </div>
              
            </div>
          </div>
        </div>
        {/* End of carousel */}
      </div>
    </div>
    {/* End of card */}
  </div>
  <div className="container">
    <div className="card float-left">
      <div className="row ">
        
    </div>
   
    </div>
  </div>
  <br />
  <br />
</div>


 
)
}
export default Details