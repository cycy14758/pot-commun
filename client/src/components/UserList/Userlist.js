import React from 'react'
import './Userlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getusers } from '../../Redux/Actions/Actionuser'

 
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
                  <th><span>name</span></th>
  
                  <th><span>Email</span></th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
               {users.map((el)=><tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
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