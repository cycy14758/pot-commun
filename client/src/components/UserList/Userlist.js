import React from 'react'
import './Userlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getusers } from '../../Redux/Actions/Actionuser'

 <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

function Userlist() {
 
 
  const users=useSelector(state=>state.userReducer.users)
  const dispatch=useDispatch()
  console.log(users);
  useEffect(() => {
  
    dispatch( getusers())



  }, [])
  
  return (
    
    <div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="main-box clearfix">
          <div className="table-responsive">
            <table className="table user-list">
              <thead>
                <tr>
                  <th><span>User</span></th>
                  <th><span>Email</span></th>
  
                  <th><span>paramétre</span></th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
               {users.map((el)=><tr>
                  <td>
                    <img src="https://img.freepik.com/photos-gratuite/portrait-jeune-fille-belle-hipster-robe-ete-mode_158538-18256.jpg?w=740&t=st=1700572696~exp=1700573296~hmac=11e354979b60ad0cf54d761752ffda4b028387ed564f0f0b664685962ded05be" alt />
                    <a href="#" className="user-link">{el.name}</a>
                    <span className="user-subhead">Admin</span>
                  </td>
            
                  <td>
                    <a href="#">{el.email}</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>) }
             
              </tbody>
            </table>
          </div>
          <ul className="pagination pull-right">
            <li><a href="#"><i className="fa fa-chevron-left" /></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#"><i className="fa fa-chevron-right" /></a></li>
        
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Userlist