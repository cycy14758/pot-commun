import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addpot } from '../../Redux/Actions/Actionpot';

import "./Addpot.css"
function Addpot() {
  const [title, settitle] = useState("");
  const [desc, setdescription] = useState("");
  const [totale, settotale] = useState();
  const [img, setimg] = useState();

  
  const user = useSelector(state => state.userReducer.currentuser)
  const navigate = useNavigate();
  const dispatch=useDispatch()
  console.log(user._id);
  const handlesubmit =(e)=>{
    e.preventDefault()
   
    const data = new FormData();

    data.append("title",title)
    data.append("description",desc)
    data.append("total",totale)
    data.append("file",img)
    data.append("user",user._id)

  dispatch(addpot(data,navigate))
   
  }
 
  return (
   <div>
  <div className="formbold-main-wrapper">
    {/* Author: FormBold Team */}
    {/* Learn More: https://formbold.com */}
    <div className="formbold-form-wrapper">
   
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="formbold-form-title">
   
   
        </div>
        <div className="fer">
          <div>
            <label htmlFor="firstname" className="formbold-form-label">
            Nom du pot
            </label>
            <input onChange={(e) => settitle(e.target.value)}  type="text" name="firstname" id="firstname" className="formbold-form-input" />
          </div>
          
        </div>
        <div className="fer">
          <div>
            <label htmlFor="email" className="formbold-form-label"> description</label>
            <input onChange={(e) => setdescription(e.target.value)} name="email" id="email" className="formbold-form-input" />
          </div>
          <div>
            <label htmlFor="number" className="formbold-form-label"> totale</label>
            <input onChange={(e) => settotale(e.target.value)} type="email" name="email" id="email" className="formbold-form-input" />
          </div>

          <div>
          <label htmlFor="firstname" className="formbold-form-label">
        Catégories
            </label>
            <div className="custom-select-container">
  {/* Custom select element for the group members */}
  <select className="custom-select" id="groupSelector">
    <option value="member1">Anniversaire</option>
    <option value="member2">pot de départ</option>
    <option value="member3">mariage</option>
    {/* Add more options as needed */}
  </select>
</div>
<div className="custom-form-item-unique">
        <div className="custom-label">Pot Image:</div>
        <input type="file" onChange={(e) => setimg(e.target.files[0])}   className="custom-input" id="image" name="image" accept="image/*" required />
      </div>


            </div>

        </div>
  
       
        <div className="formbold-input-flex">
        
        </div>
       
           <button className="ajout"   onClick={handlesubmit}>Ajouter un pot </button>
      </form>
      <script>
 
      </script>
    </div>
  </div>
  <style dangerouslySetInnerHTML={{__html: "\n    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    body {\n      font-family: 'Inter', sans-serif;\n    }\n    .formbold-mb-3 {\n      margin-bottom: 15px;\n    }\n    .formbold-relative {\n      position: relative;\n    }\n    .formbold-opacity-0 {\n      opacity: 0;\n    }\n    .formbold-stroke-current {\n      stroke: currentColor;\n    }\n    #supportCheckbox:checked ~ div span {\n      opacity: 1;\n    }\n  \n    .formbold-main-wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 48px;\n    }\n  \n    .formbold-form-wrapper {\n      margin: 0 auto;\n      max-width: 570px;\n      width: 100%;\n      background: transparant;\n      padding: 40px;\n    }\n  \n    .formbold-img {\n      margin-bottom: 45px;\n    }\n  \n    .formbold-form-title {\n      margin-bottom: 30px;\n    }\n    .formbold-form-title h2 {\n      font-weight: 600;\n      font-size: 28px;\n      line-height: 34px;\n      color: #07074d;\n    }\n    .formbold-form-title p {\n      font-size: 16px;\n      line-height: 24px;\n      color: #536387;\n      margin-top: 12px;\n    }\n  \n    .formbold-input-flex {\n      display: flex;\n      gap: 20px;\n      margin-bottom: 15px;\n    }\n    .formbold-input-flex > div {\n      width: 50%;\n    }\n    .formbold-form-input {\n      text-align: center;\n      width: 100%;\n      padding: 13px 22px;\n      border-radius: 5px;\n      border: 1px solid #dde3ec;\n      background: #ffffff;\n      font-weight: 500;\n      font-size: 16px;\n      color: #536387;\n      outline: none;\n      resize: none;\n    }\n    .formbold-form-input:focus {\n      border-color: #6a64f1;\n      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n    }\n    .formbold-form-label {\n      color: #536387;\n      font-size: 14px;\n      line-height: 24px;\n      display: block;\n      margin-bottom: 10px;\n    }\n  \n    .formbold-checkbox-label {\n      display: flex;\n      cursor: pointer;\n      user-select: none;\n      font-size: 16px;\n      line-height: 24px;\n      color: #536387;\n    }\n    .formbold-checkbox-label a {\n      margin-left: 5px;\n      color: #6a64f1;\n    }\n    .formbold-input-checkbox {\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      padding: 0;\n      margin: -1px;\n      overflow: hidden;\n      clip: rect(0, 0, 0, 0);\n      white-space: nowrap;\n      border-width: 0;\n    }\n    .formbold-checkbox-inner {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 20px;\n      height: 20px;\n      margin-right: 16px;\n      margin-top: 2px;\n      border: 0.7px solid #dde3ec;\n      border-radius: 3px;\n    }\n  \n    .formbold-btn {\n      font-size: 16px;\n      border-radius: 5px;\n      padding: 14px 25px;\n      border: none;\n      font-weight: 500;\n      background-color: #6a64f1;\n      color: white;\n      cursor: pointer;\n      margin-top: 25px;\n    }\n    .formbold-btn:hover {\n      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n    }\n  " }} />
</div>

  )
}

export default Addpot