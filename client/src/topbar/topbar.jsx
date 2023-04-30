import { Link } from "react-router-dom";
import "./topbar.css"
import user from "../../../server/models/user";

function Topbar() {
  const user = user;
  return (
    <div className="top">
    
    
     <div className="topCenter">

     <Link to="/" className="navItem">HOME</Link>
     <Link to="/" className="navItem">ABOUT</Link>
     <Link to="/" className="navItem">CONTACT</Link>
     <Link to="/write" className="navItem">WRITE</Link>
     </div>
     {!user &&  <Link to="/login" className="navItem">LOGIN</Link>}
     {user && (<Link to="/register" className="navItem">LOG OUT</Link>)}
     
     { 
     user ? 
     <div className="topRight">
     <img className="profilePic" src="./689.png" alt=""/>
      <i className="topSearchBar fa-sharp fa-solid fa-magnifying-glass"></i>
      
     </div> :
     <>
     
     <Link to="/register" className="navItem">REGISTER</Link>
     </>

}



      </div>
  )
}

export default Topbar;