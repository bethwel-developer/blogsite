import React from 'react'
import "./home.css"
import Header from '../header/header'
import Posts from '../posts/posts'
import Sidebar from '../sidebar/sidebar'

function Home() {
  return (
    <>
   
      <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
      </>
  )
}

export default Home