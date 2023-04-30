import React from 'react'
import "./write.css"

function Write() {
  return (
    <div className='write'>
      <img className='writeImage' src="./n8.jpg" alt="" />
      <form className="writeForm">
      <div className="writeformGroup">
        <label htmlFor="fileInput">
        <i class="writeIcon fa-sharp fa-solid fa-plus"></i>
        </label>
        <input type="file" name="" id="fileInput" className='choosefileplace'/>
        <input type="text" placeholder='Title' className='writeInput1'/>
      </div>
      <div className="writeformGroup">
        <textarea placeholder='Tell your story........' type='text' className='writeInput writeText' ></textarea>
      </div>
      <button className="writeSubmit">publish</button>
      </form>
      </div>
  )
}

export default Write