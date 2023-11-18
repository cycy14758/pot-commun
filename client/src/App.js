

import './App.css';
import Home from './components/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes ,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profil from './components/Profil/Profil';
import UserList from './components/UserList/Userlist';
import Editprofil from './components/Editprofil/Editprofil';
import Editpot from './components/Editpot/Editpot';
import Addpot from './components/Addpot/Addpot';
import Information from './components/Informations/Information';
import Potlist from './components/Potlist/potlist';

import Doc from './components/Doc/Doc';
import Sécurité from './components/Sécurité/Sécurité';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrent } from './Redux/Actions/Actionuser';




function App() {

  const dispatch=useDispatch()
  useEffect(() => {
    
   dispatch(getCurrent())
 
  }, [])

 
  return (
    <div>
     
      <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profil' element={<Profil/>}/>
      <Route path='/pots' element={<Potlist/>}  />
      <Route path='/addpot' element={ <Addpot/> }/>
      <Route path='/editprofile' element={<Editprofil/>}/>
      <Route path='/editpot' element={<Editpot/>}/>
      <Route path='/admin' element={<UserList/>}/>
      <Route path='/info' element={<Information/>}/>
      <Route path='/sec' element={<Sécurité/>}/>
      <Route path='/doc' element={<Doc/>}/>
    </Routes>
    </div>
  );
}

export default App;