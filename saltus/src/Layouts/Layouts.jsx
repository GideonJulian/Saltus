import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
const Layouts = () => {
  return (
    <div>
        <Outlet />
        <div>
          <Footer /> 
        </div>
    </div>
  )
}

export default Layouts