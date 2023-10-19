import React from 'react'
import "./single.css"
import Sidebar from '../sidebar/sidebar'
import Singlepost from '../singlepost/singlepost'

function Single() {
  return (
    
    <div className='single'>
      <Singlepost/>
      <Sidebar/>
    </div>
  )
}

export default Single
