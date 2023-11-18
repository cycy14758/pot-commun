import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function Information() {
  const user=useSelector(state=>state.userReducer.currentuser)
  return (
<div>
    <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000', height: 200}}>
          <div className="ms-4 mt-5 d-flex flex-column" style={{width: 150}}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: 150, zIndex: 1}} />
            <Link to={"/editprofile"}   ><button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
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
          <Link to={"/info"}   > <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
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
             <div>
             <div className="formbold-main-wrapper">
            
               <div className="formbold-form-wrapper">
          
                   <div className="formbold-form-title">
                     <h2 className></h2>
                     <p>
                     Mes informations
                     </p>
                   </div>
                   <div className="formbold-input-flex">
                     <div>
                       <label htmlFor="firstname" className="formbold-form-label">
                      {user.name}
                       </label>
                     </div>
                     
                   </div>
                   <div className="formbold-input-flex">
                     <div>
                       <label htmlFor="email" className="formbold-form-label"> {user.email}</label>
                
                     </div>
                    
                   </div>
                
                   <div className="formbold-input-flex">
                    
                   
                   </div>
                   <div className="formbold-input-flex">
                    
                    
                   </div>
                   
         
               </div>
             </div>
             <style dangerouslySetInnerHTML={{__html: "\n    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    body {\n      font-family: 'Inter', sans-serif;\n    }\n    .formbold-mb-3 {\n      margin-bottom: 15px;\n    }\n    .formbold-relative {\n      position: relative;\n    }\n    .formbold-opacity-0 {\n      opacity: 0;\n    }\n    .formbold-stroke-current {\n      stroke: currentColor;\n    }\n    #supportCheckbox:checked ~ div span {\n      opacity: 1;\n    }\n  \n    .formbold-main-wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 48px;\n    }\n  \n    .formbold-form-wrapper {\n      margin: 0 auto;\n      max-width: 570px;\n      width: 100%;\n      background: white;\n      padding: 40px;\n    }\n  \n    .formbold-img {\n      margin-bottom: 45px;\n    }\n  \n    .formbold-form-title {\n      margin-bottom: 30px;\n    }\n    .formbold-form-title h2 {\n      font-weight: 600;\n      font-size: 28px;\n      line-height: 34px;\n      color: #07074d;\n    }\n    .formbold-form-title p {\n      font-size: 16px;\n      line-height: 24px;\n      color: #536387;\n      margin-top: 12px;\n    }\n  \n    .formbold-input-flex {\n      display: flex;\n      gap: 20px;\n      margin-bottom: 15px;\n    }\n    .formbold-input-flex > div {\n      width: 50%;\n    }\n    .formbold-form-input {\n      text-align: center;\n      width: 100%;\n      padding: 13px 22px;\n      border-radius: 5px;\n      border: 1px solid #dde3ec;\n      background: #ffffff;\n      font-weight: 500;\n      font-size: 16px;\n      color: #536387;\n      outline: none;\n      resize: none;\n    }\n    .formbold-form-input:focus {\n      border-color: #6a64f1;\n      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n    }\n    .formbold-form-label {\n      color: #536387;\n      font-size: 14px;\n      line-height: 24px;\n      display: block;\n      margin-bottom: 10px;\n    }\n  \n    .formbold-checkbox-label {\n      display: flex;\n      cursor: pointer;\n      user-select: none;\n      font-size: 16px;\n      line-height: 24px;\n      color: #536387;\n    }\n    .formbold-checkbox-label a {\n      margin-left: 5px;\n      color: #6a64f1;\n    }\n    .formbold-input-checkbox {\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      padding: 0;\n      margin: -1px;\n      overflow: hidden;\n      clip: rect(0, 0, 0, 0);\n      white-space: nowrap;\n      border-width: 0;\n    }\n    .formbold-checkbox-inner {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 20px;\n      height: 20px;\n      margin-right: 16px;\n      margin-top: 2px;\n      border: 0.7px solid #dde3ec;\n      border-radius: 3px;\n    }\n  \n    .formbold-btn {\n      font-size: 16px;\n      border-radius: 5px;\n      padding: 14px 25px;\n      border: none;\n      font-weight: 500;\n      background-color: #6a64f1;\n      color: white;\n      cursor: pointer;\n      margin-top: 25px;\n    }\n    .formbold-btn:hover {\n      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n    }\n  " }} />
           </div>
           </div>
  )
}

export default Information