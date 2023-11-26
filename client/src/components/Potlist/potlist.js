import React from 'react';
import './potlist.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch, useSelector } from 'react-redux';
import Pots from '../Pots/Pots';  

import { getAllPots, search } from '../../Redux/Actions/Actionpot';
import { useEffect } from 'react';


function Potlist() {
  useEffect(() => {
    dispatch(getAllPots())
  }, [])

  const PotsArray = useSelector((state) => state.potReducer.pots);
console.log(PotsArray);


const dispatch=useDispatch()

  return (
    
    <div className='parent'>
      <input className='search'  placeholder='search' onChange={(e)=>dispatch(search(e.target.value))}  />
      <i   className="bi bi-search"></i>
      {PotsArray.map((el) => (
        <Pots key={el.id} el={el} />
      ))}



    </div>
    
)}

export default Potlist;
