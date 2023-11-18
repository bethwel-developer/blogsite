import React from 'react'
import "./sidebar.css"

function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="sidebarItem">
        
          <span className="sidebarTitle" >ABOUT ME</span>
          <img className="sidebarImage" src="./profilepic.avif" alt="" />
          <p className='sidebarDescription'> Loremipsum dolor sit amet, consectetur adipisicing elit. Sed maxime minus ut, amet, rerum velit aliquid quisquam eos quo neque sabo</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sideItems">life</li>
          <li className="sideItems">music</li>
          <li className="sideItems">style</li>
          <li className="sideItems">tech</li>
          <li className="sideItems">cinema</li>
          <li className="sideItems">sport</li>


        </ul>
        <div className="sidebarItem"></div>
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocials">
          <i className="sidebarIcons fa-brands fa-square-facebook"></i>
          <i  className="sidebarIcons fa-brands fa-square-instagram"></i>
          <i  className="sidebarIcons fa-brands fa-square-twitter"></i>
          <i  className="sidebarIcons fa-brands fa-square-pinterest"></i>
        </div>


      </div>
    </div>
  )
}

export default Sidebar
