import React from 'react'

import Home from './home/home';
import Register from './register/register';
import Login from './login/login';
import Single from './single/single';
import Write from './write/write';
import Topbar from './topbar/topbar';
import Settings from './setting/setting';


 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import user from '../../server/models/user';



function App() {
 const user= user;
  return (
    
    <Router>
    <Topbar/>
    <Routes>
    <Route path="/"  element={<Home/>}></Route> 
    <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
    <Route path="/login" element={user?<Home/>:<Login/>} ></Route>
    <Route path="/write" element={user? <Write/> :<Register />} ></Route>
    <Route path="/settings" element={user ? <Settings/> : <Register/>} ></Route>
    <Route path="/post/:postId" element={<Single />} ></Route> 
    </Routes>
    </Router>
  );
}


export default App
