import React from 'react'
import "./setting.css"
import Sidebar from '../sidebar/sidebar'

function Settings() {
  
  return (
    <div className='setting'>
      <div className="settingwrapper">
        <div className="settingTitle">
        <span className="updateTitle">update your account</span>
        <span className="deleteTitle">delete your account</span>
      </div>
      <form action="" className="settingForm">
        <label>profile pic</label>
        <div className="profilepicSetting">
          <img src="./2.jpg" alt="" />
          <label htmlFor="fileinput">
          <i className="proficepicIcon fa-solid fa-user"></i>     
          </label>
          
          <input type="file" name="" id="fileInput" className='choosefilePlace'/>
        </div>
        <label>Username </label>
        <input type="text" placeholder='bethwel'/>
        <label>email</label>
        <input type="email" placeholder='example@gmail.com'/>
       
        <label>password </label>
        <input type="text" placeholder='password'/>
        <button className="settingsubmit">update</button>
      </form>
      </div>

    <Sidebar/>
      
    </div>
  
  )
}

export default Settings;
