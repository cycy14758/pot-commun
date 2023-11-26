import React from 'react';
import './Pots.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getonepot } from '../../Redux/Actions/Actionpot';

function Pots({ el }) {

const dispatch=useDispatch()

  console.log(el);
  return (
    <div className='tout'>
   <section className="articles">
  <article>
    <div className="article1">
      <figure>
        <img src={el.img} alt />
      </figure>
      <div className="article">
        <h2>{el.title}</h2>
        <p>
          {el.desc}
        </p>
      
       
          
          
          
          <Link   to={`/details/${el._id}`}   > <button  onClick={dispatch(getonepot(el._id))}   >details</button></Link>
        
      </div>
    </div>
  </article>
  
</section>
</div>

  );
}

export default Pots;
