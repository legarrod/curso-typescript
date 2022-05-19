import React from 'react'
import Navbar from "../Navbar/Navbar"

function Layout({children}: any) {
  return (
    <div>
        <Navbar/>
        <div className='pt-16 px-10'>
          {children}
        </div>
    </div>
  )
}

export default Layout